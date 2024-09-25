<script setup>
import http from "shared/services/http-common.js";
/**
 * TutorialsApiService class
 * @description Service class for making HTTP requests to the API
 */

export class TutorialsApiService {
  /**
   * Get item tutorials
   * @returns {Promise<axios.AxiosResponse<any>>}
   */
  getAll() {
    return http.get('/tutorials');
  }

  /**
   * Get tutorial by id
   * @param id
   * @returns {Promise<axios.AxiosResponse<any>>}
   */
  getById(id) {
    return http.get(`/tutorials/${id}`);
  }

  /**
   * Create a new item
   * @param tutorialResource - tutorial object to create
   * @returns {Promise<axios.AxiosResponse<any>>}
   */
  create(tutorialResource) {
    return http.post('/tutorials', tutorialResource);
  }

  /**
   * Update a item
   * @param id - item id to update
   * @param tutorialResource - item object with data
   * @returns {Promise<axios.AxiosResponse<any>>}
   */
  update(id, tutorialResource) {
    return http.put(`/tutorials/${id}`, tutorialResource);
  }

  /**
   * Delete a item
   * @param id - item id to delete
   * @returns {Promise<axios.AxiosResponse<any>>}
   */
  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  /**
   * Delete all items that match the given title
   * @param title - item title to apply as criteria
   * @returns {Promise<axios.AxiosResponse<any>>}
   */
  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}
</script>