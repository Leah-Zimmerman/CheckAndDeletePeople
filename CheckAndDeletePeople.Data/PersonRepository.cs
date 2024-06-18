using Microsoft.EntityFrameworkCore;

namespace CheckAndDeletePeople.Data
{
    public class PersonRepository
    {
        private string _connectionString;
        public PersonRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Person> GetAll()
        {
            using var context = new PersonDbContext(_connectionString);
            return context.People.ToList();
        }
        public void AddPerson(Person person)
        {
            using var context = new PersonDbContext(_connectionString);
            context.People.Add(person);
            context.SaveChanges();
        }
        public void DeletePerson(Person person)
        {
            using var context = new PersonDbContext(_connectionString);
            context.People.Remove(person);
            context.SaveChanges();
        }
        public void UpdatePerson(Person person)
        {
            using var context = new PersonDbContext(_connectionString);
            var existingPerson = context.People.Find(person.Id);
            if (existingPerson != null)
            {
                existingPerson.FirstName = person.FirstName;
                existingPerson.LastName = person.LastName;
                existingPerson.Age = person.Age;
                context.SaveChanges();
            }
        }
        public void DeleteSelected(Selected selected)
        {
            if (selected == null || selected.Ids == null)
            {
                return;
            }
            using var context = new PersonDbContext(_connectionString);
            var peopleToDelete = context.People.Where(p => selected.Ids.Contains(p.Id)).ToList();
            context.People.RemoveRange(peopleToDelete);
            context.SaveChanges();
        }
    }
}

  
