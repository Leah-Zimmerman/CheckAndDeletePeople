using CheckAndDeletePeople.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;

namespace CheckAndDeletePeople.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private string _connectionString;
        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [Route("getAll")]
        public List<Person> GetAll()
        {
            var repo = new PersonRepository(_connectionString);
            return repo.GetAll();
        }
        [HttpPost]
        [Route("addPerson")]
        public void AddPerson(Person person)
        {
            var repo = new PersonRepository(_connectionString);
            repo.AddPerson(person);

        }
        [HttpPost]
        [Route("deletePerson")]
        public void DeletePerson(Person person)
        {
            var repo = new PersonRepository(_connectionString);
            repo.DeletePerson(person);
        }
        [HttpPost]
        [Route("updatePerson")]
        public void UpdatePerson(Person person)
        {
            var repo = new PersonRepository(_connectionString);
            repo.UpdatePerson(person);
        }
        [HttpPost]
        [Route("deleteSelected")]
        public void DeleteSelected(Selected selected)
        {
            var repo = new PersonRepository(_connectionString);
            repo.DeleteSelected(selected);
        }

    }
}
