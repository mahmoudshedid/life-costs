import http from "../common/http/http";

class CostDataService {
    getAll() {
        return http.get("/costs");
    }

    get(id) {
        return http.get(`/costs/${id}`);
    }

    create(data) {
        return http.post("/costs", data);
    }

    update(id, data) {
        return http.put(`/costs/${id}`, data);
    }

    delete(id) {
        return http.delete(`/costs/${id}`);
    }

    statistics() {
        return http.get(`/costs/statistics`);
    }
}

export default new CostDataService();