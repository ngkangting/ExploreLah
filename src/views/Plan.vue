<template>
  <div class="d-flex justify-content-center">
    <div class="card mt-3 w-75">
      <div class="card-body">
        <h5 class="card-title text-center mt-4">
          Build Your Own Customised Itinerary Now!
        </h5>
        <p class="text-center">
          Catered to your personal preferences, find the best possible travel
          route!
        </p>
        <form @submit.prevent="generateItinerary()">
          <div class="mb-3">
            <label for="location" class="form-label">Location</label>
            <input
              type="text"
              class="form-control"
              id="location"
              placeholder="Where are you staying?"
              v-model="location"
            />
          </div>
          <div class="mb-3">
            <label for="start-date" class="form-label">Start Date</label>
            <input
              type="date"
              class="form-control"
              id="start-date"
              v-model="startDate"
            />
          </div>
          <div class="mb-3">
            <label for="end-date" class="form-label">End Date</label>
            <input
              type="date"
              class="form-control"
              id="end-date"
              v-model="endDate"
            />
          </div>
          <div class="row">
            <div class="col-6">
              <h6 class="text-center">Preferences</h6>
              <div>
                <label for="shopping" class="form-label">Shopping</label>
                <input
                  type="range"
                  class="form-range"
                  min="0"
                  max="5"
                  id="shopping"
                  v-model="shopping"
                />
              </div>
              <div>
                <label for="arts-culture" class="form-label"
                  >Arts & Culture</label
                >
                <input
                  type="range"
                  class="form-range"
                  min="0"
                  max="5"
                  id="arts-culture"
                  v-model="arts"
                />
              </div>
              <div>
                <label for="outdoor" class="form-label">Outdoor</label>
                <input
                  type="range"
                  class="form-range"
                  min="0"
                  max="5"
                  id="outdoor"
                  v-model="outdoor"
                />
              </div>
              <div>
                <label for="adventure" class="form-label">Adventure</label>
                <input
                  type="range"
                  class="form-range"
                  min="0"
                  max="5"
                  id="adventure"
                  v-model="adventure"
                />
              </div>
              <div>
                <label for="nightlife" class="form-label">Nightlife</label>
                <input
                  type="range"
                  class="form-range"
                  min="0"
                  max="5"
                  id="nightlife"
                  v-model="nightlife"
                />
              </div>
            </div>
            <div class="col-6">
              <h6 class="text-center">Transportation Method</h6>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="public-transport"
                  id="public-transport"
                  value="public"
                  v-model="transportation"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Public Transport
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="private-transport"
                  id="private-transport"
                  value="private"
                  v-model="transportation"
                />
                <label class="form-check-label" for="private-transport">
                  Private Transport
                </label>
              </div>
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-pink">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Plan",
  data() {
    return {
      location: "",
      startDate: "",
      endDate: "",
      shopping: 0,
      arts: 0,
      outdoor: 0,
      adventure: 0,
      nightlife: 0,
      transportation: "",
    };
  },
  methods: {
    generateItinerary() {
      console.log(this.location);
      console.log(this.startDate);
      console.log(this.endDate);
      console.log(this.shopping);
      console.log(this.arts);
      console.log(this.outdoor);
      console.log(this.adventure);
      console.log(this.nightlife);
      console.log(this.transportation);
    },
  },
};
</script>

<style></style>
