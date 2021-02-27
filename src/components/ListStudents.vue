<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12">
                <h1>List of grad forms</h1>
            </div>
            <button class="btn-primary btn-lg" @click="exportData">Export</button>
            <hr />
            <div class="col-12">
                <table class="table table-sm table-bordered">
                    <thead>
                        <tr>
                            <th>Student Number</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Section</th>
                            <th>Department</th>
                            <th>Soft Copy</th>
                            <th>Photo ID Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(student, index) in forms" :key="index">
                            <td>{{ student.student_number }}</td>
                            <td>{{ student.firstname }}</td>
                            <td>{{ student.lastname }}</td>
                            <td>{{ student.section }}</td>
                            <td>{{ student.department }}</td>
                            <td>{{ softCopy(student.avail_soft_copy) }}</td>
                            <td>{{ student.photo_id_number }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import { db } from '../libs/firebase';
import  XLSX from 'xlsx';

export default {
    name: 'ListStudents',

    data: () => ({
        forms: []
    }),

    methods: {
        async getForms() {
            await db.collection('grad_forms').get().then(snapshot => {
                //get all students
                snapshot.forEach( student => {
                    this.forms.push(student.data());
                })
            }).catch(err => console.log(err));
        },

        softCopy(e) {
            return e === 0 ? 'NO' : (e === 1 ? 'YES' : "Can't decide"); 
        },

        exportData() {
            let wb = XLSX.utils.book_new();
            let ws = XLSX.utils.json_to_sheet(this.forms);
            XLSX.utils.book_append_sheet(wb, ws, "BCP Graduation Forms");

            XLSX.writeFile(wb, "BCP Graduation Forms.xlsx", {compression: true})
        }
    },

    created() {
        this.getForms();
    }
}
</script>