import { fetchWeatherByCityName } from "../weatherSvs";

describe("weatherSvs", () => {
  it("it should return weather info for 'Berlin'", () => {
    const cityName = "Berlin";
    fetchWeatherByCityName(cityName).then(response => {
      expect(response.status).toBe(200);
      const { data } = response;
      expect(data.name).toBe(cityName);

      it("it should contain minimum keys", () => {
        const dataKeys = Object.keys(data);
        const minimumKeys = ["weather", "main", "wind", "sys", "name"];
        minimumKeys.map(key => expect(dataKeys).toContain(key));
      });
      
    });
  });

  it("it should return 404", () => {
    fetchWeatherByCityName("Be").catch(error => {
      expect(error.status).toBe(404);
    });
  });
});
