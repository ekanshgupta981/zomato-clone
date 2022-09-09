import React from "react";

export default function SearchFilter(props) {
  let { LocationList, filterData } = props;
  return (
    <>
      <section className=" filter-height card col-lg-3 col-10 px-lg-3 mt-5 mb-5 shadow">
        <div className="d-flex justify-content-evenly flex-column card-body">
          <h3 className="nav-blue fw-bold">Filters</h3>

          <p className="text-muted fs-5">select a location</p>

          {/* <!-- location dropdown --> */}

          <select
            className="py-2 text-muted px-5"
            onChange={(event) => filterData(event, "location")}
          >
            <option value="">Select Location</option>
            {LocationList.map((location) => {
              return (
                <option value={location.location_id}>
                  {location.name}, {location.city}
                </option>
              );
            })}
          </select>

          {/* <!--/////////////////////////////////////// filter location //////////////////////////////////--> */}

          <h4 className="nav-blue">Cuisine</h4>

          <section className="text-muted form-check">
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                id="CB-1"
                value={1}
                onChange={(event) => filterData(event, "cuisine")}
              />
              <label htmlFor="CB-1">North Indian</label>
            </div>
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                id="CB-2"
                value={2}
                onChange={(event) => filterData(event, "cuisine")}
              />
              <label htmlFor="CB-2">South Indian</label>
            </div>
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                id="CB-3"
                value={3}
                onChange={(event) => filterData(event, "cuisine")}
              />
              <label htmlFor="CB-3">Chinese</label>
            </div>
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                id="CB-4"
                value={4}
                onChange={(event) => filterData(event, "cuisine")}
              />
              <label htmlFor="CB-4">Fast Food</label>
            </div>
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                id="CB-5"
                value={5}
                onChange={(event) => filterData(event, "cuisine")}
              />
              <label htmlFor="CB-5">Street Food</label>
            </div>
          </section>

          <h4 className="nav-blue">Cost For Two</h4>

          {/* <!--///////////////////////////////////// filter price --> /////////////////////////////////////////////////////*/}

          <section className="form-check text-muted">
            <div>
              <input
                className="form-check-input"
                type="radio"
                id="pr-1"
                value="0-500"
                name="cost42"
                onChange={(event) => filterData(event, "cost")}
              />
              <label htmlFor="pr-1">Less than ` 500</label>
            </div>
            <div>
              <input
                className="form-check-input"
                type="radio"
                id="pr-2"
                value="500-1000"
                name="cost42"
                onChange={(event) => filterData(event, "cost")}
              />
              <label htmlFor="pr-2">` 500 to ` 1000</label>
            </div>
            <div>
              <input
                className="form-check-input"
                type="radio"
                id="pr-3"
                value="1000-1500"
                name="cost42"
                onChange={(event) => filterData(event, "cost")}
              />
              <label htmlFor="pr-3">` 1000 to ` 1500</label>
            </div>
            <div>
              <input
                className="form-check-input"
                type="radio"
                id="pr-4"
                value="1500-2000"
                name="cost42"
                onChange={(event) => filterData(event, "cost")}
              />
              <label htmlFor="pr-4">` 1500 to ` 2000</label>
            </div>
            <div>
              <input
                className="form-check-input"
                type="radio"
                id="pr-5"
                value="2000-200000"
                name="cost42"
                onChange={(event) => filterData(event, "cost")}
              />
              <label htmlFor="pr-5">` 2000+</label>
            </div>
          </section>

          <h4 className="nav-blue fw-bold">Sort</h4>

          {/* <!--///////////////////////////////// sorting food by its price //////////////////////////////////--> */}

          <section className="text-muted form-check">
            <div>
              <input
                className="form-check-input"
                type="radio"
                name="choose-1"
                id="co-1"
                value="1"
                onChange={(event) => filterData(event, "sort")}
              />
              <label htmlFor="co-1">Price low to high</label>
            </div>
            <div>
              <input
                className="form-check-input"
                type="radio"
                name="choose-1"
                id="co-2"
                value="-1"
                onChange={(event) => filterData(event, "sort")}
              />
              <label htmlFor="co-2">Price high to low</label>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
