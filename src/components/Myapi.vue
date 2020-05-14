<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Question1" v-on:click="callDoScg">
          <b-card-text v-if="output != ''">Create a new controller and Model called “DOSCG”</b-card-text>
          <b-card-text v-if="output != ''">Response : <b>{{output}}</b></b-card-text>
        </b-tab>
        <b-tab title="Question2" v-on:click="findXYZ">
          <b-card-text v-if="output != ''">X, Y, 5, 9, 15, 23, Z - Please create a new function for finding X, Y, Z
            value
          </b-card-text>
          <b-card-text v-if="output != ''">
            <span v-for="(value,index) in output.response"> {{ index }} = <b>{{ value }}</b> </span>
          </b-card-text>
        </b-tab>
        <b-tab title="Question3" v-on:click="findABC">
          <b-card-text v-if="output != ''">If A = 21, A + B = 23, A + C = -21 - Please create a new function for finding
            B and C value
          </b-card-text>
          <b-card-text v-if="output != ''">
            <span v-for="(value,index) in output.response"> {{ index }} = <b>{{ value }}</b>  </span>
          </b-card-text>
        </b-tab>
        <b-tab title="Question3" v-on:click="findBestWay">
          <b-card-text v-if="output != ''">Please use “Google API” for finding the best way to go to Central World from SCG Bangsue
          </b-card-text>
          <b-card-text v-if="output != ''">
            <span v-for="value in output.routes">
              เส้นทาง : <b>{{ value.summary }}</b>
                <span v-for="leg in value.legs">
                  ( Distance : <b>{{ leg.distance.text }}</b>
                  Duration : <b>{{ leg.duration.text }}</b>) <br>
                  Start Address : <b>{{ leg.start_address }}</b> <br>
                  End Address : <b>{{ leg.end_address }}</b> <br>
                  <table class="table" align="center">
                    <thead>
                      <tr>
                        <th>การเดินทาง</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(step,key) in leg.steps">
                        <td><p v-html="step.html_instructions"></p></td>
                      </tr>
                    </tbody>
                  </table>
                </span>
            </span>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>export default {
  mounted () {
    console.log('Component mounted.')
  },
  data () {
    return {
      output: ''
    }
  },
  methods: {
    callDoScg(e) {
      let currentObj = this
      this.axios.get('http://localhost:6319/v1/doscg')
        .then(function (response) {
          currentObj.output = response.data
        })
        .catch(function (error) {
          currentObj.output = error
        })
    },
    findXYZ (e) {
      let currentObj = this
      this.axios.get('http://localhost:6319/v1/doscg/xyz')
        .then(function (response) {
          currentObj.output = response.data
        })
        .catch(function (error) {
          currentObj.output = error
        })
    },
    findABC (e) {
      let currentObj = this
      this.axios.get('http://localhost:6319/v1/doscg/abc')
        .then(function (response) {
          currentObj.output = response.data
        })
        .catch(function (error) {
          currentObj.output = error
        })
    },
    findBestWay (e) {
      let currentObj = this
      this.axios.get('http://localhost:6319/v1/doscg/map')
        .then(function (response) {
          currentObj.output = response.data.response
        })
        .catch(function (error) {
          currentObj.output = error
        })
    }
  },
  created: function () {
    this.callDoScg()
  }
}
</script>

<style>

  @media screen and (min-width: 600px) {
    .table{
      width:50%;
      margin-top: 20px;
    }
    .card-header{
      padding-left:35%;
    }
  }
</style>
