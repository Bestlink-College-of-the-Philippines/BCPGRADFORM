<template>
  <form @submit.prevent="submit">
    <div class="container">
      <div class="row  mb-2 mt-5">
        <div class="col-6">
          <div class="form-group">
            <label>Firstname</label>
            <input
              type="text"
              v-model="form_.firstname"
              class="form-control"
              required
            />
          </div>
        </div>
        <div class="col-6 mb-2">
          <div class="form-group">
            <label>Lastname</label>
            <input
              type="text"
              v-model="form_.lastname"
              class="form-control"
              required
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 mb-2">
          <div class="form-group">
            <label>Department</label>
            <input
              type="text"
              v-model="form_.department"
              class="form-control"
              required
            />
          </div>
        </div>

        <div class="col-12 mb-5">
          <div class="form-group">
            <label>Section</label>
            <input
              type="text"
              v-model="form_.section"
              class="form-control"
              required
            />
          </div>
        </div>

        <div class="col-12 mb-2">
          <div class="form-group">
            <label
              >Are you going to avail <b>GRADUATION PICTURE SOFTCOPY?</b> [100
              pesos only]</label
            >
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="targetRDO"
                id="targetRDO1"
                value="1"
              />
              <label class="form-check-label" for="targetRDO1">
                Yes, I will
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="targetRDO"
                id="targetRDO2"
                value="0"
                checked
              />
              <label class="form-check-label" for="targetRDO2">
                No
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="targetRDO"
                id="targetRDO3"
                value="2"
              />
              <label class="form-check-label" for="targetRDO3">
                I will think about it.
              </label>
            </div>
          </div>
        </div>

        <div class="col-12 mb-5 mt-5">
          <hr />
          <div class="form-group">
            <label>Photo ID Number</label>
            <input
              type="text"
              v-model="form_.photo_id_number"
              class="form-control"
              required
            />
            <small>Get the number from the photographer</small>
          </div>
        </div>

        <p>
          <i
            >By accessing the BCP's graduation photoshoot form, you acknowledge
            and agree that the information may be used and disclosed by the BCP
            in accordance with any legal and regulatory standards and in
            compliance with the "Data privacy act of 2012".</i
          >
        </p>

        <button type="submit" class="btn-primary btn-lg mt-2 mb-5">
          Submit
        </button>
      </div>
    </div>
  </form>
</template>

<script>

import { db } from '../libs/firebase';

export default {
  name: "HelloWorld",
  data: () => ({
    form_: {
      firstname: "",
      lastname: "",
      department: "",
      section: "",
      avail_soft_copy: 0,
      photo_id_number: "",
    }
  }),

  methods: {
    submit() {
      let student_data = db.collection('grad_forms'); //.doc(this.form_.student_number);
      let soft_copy = document.querySelector('input[name="targetRDO"]:checked').value;
      this.form_.avail_soft_copy = Number(soft_copy);
      student_data.add(this.form_).then( () => {
          window.Swal.fire('Success', 'Your form was successfully added', 'success');
          this.form_ = {
            firstname: "",
            lastname: "",
            department: "",
            section: "",
            avail_soft_copy: 0,
            photo_id_number: "",
          }
        }).catch(err => console.log(err));


      // student_data.get().then( data => {
      //   if (data.exists) {
      //     window.Swal.fire('Opps!', 'Student Number already existing', 'error');
      //     return;
      //   }

        

      // }).catch(err => console.log(err));
      
      
    },
  },
};
</script>
