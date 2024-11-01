export class ServiceDetail {
    constructor(name = "", description = "", price = 0, category = "", schedules = [], workaround = [], farePerHour = 0, caregiver = { fullName: "", address: "", district: "" }) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.schedules = schedules;
        this.workaround = workaround;
        this.farePerHour = farePerHour;
        this.caregiver = caregiver;
    }
}
