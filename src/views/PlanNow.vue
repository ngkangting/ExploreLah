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
        <form>
          <div class="mb-3">
            <label for="location" class="form-label">Location</label>
            <input
              type="email"
              class="form-control"
              id="location"
              placeholder="Where are you staying?"
            />
          </div>
          <div class="mb-3">
            <label for="start-date" class="form-label">Start Date</label>
            <input type="date" class="form-control" id="start-date" />
          </div>
          <div class="mb-3">
            <label for="end-date" class="form-label">End Date</label>
            <input type="date" class="form-control" id="end-date" />
          </div>
          <div>
            <label for="shopping" class="form-label">Shopping</label>
            <input
              type="range"
              class="form-range"
              min="0"
              max="5"
              value="0"
              id="shopping"
            />
          </div>
          <div>
            <label for="arts-culture" class="form-label">Arts & Culture</label>
            <input
              type="range"
              class="form-range"
              min="0"
              max="5"
              value="0"
              id="arts-culture"
            />
          </div>
          <div>
            <label for="outdoor" class="form-label">Outdoor</label>
            <input
              type="range"
              class="form-range"
              min="0"
              max="5"
              value="0"
              id="outdoor"
            />
          </div>
          <div>
            <label for="adventure" class="form-label">Adventure</label>
            <input
              type="range"
              class="form-range"
              min="0"
              max="5"
              value="0"
              id="adventure"
            />
          </div>
          <div>
            <label for="nightlife" class="form-label">Nightlife</label>
            <input
              type="range"
              class="form-range"
              min="0"
              max="5"
              value="0"
              id="nightlife"
            />
          </div>
          <div class="">
            <h6>Transportation Method</h6>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="public-transport"
                id="public-transport"
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
                checked
              />
              <label class="form-check-label" for="private-transport">
                Private Transport
              </label>
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
  name: "PlanNow",
  data() {
    return {};
  },

  methods: {},
};
</script>

<style></style>
