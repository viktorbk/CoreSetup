using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoreSetup.Data
{
    public class Course
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime When { get; set; }
        public int MyProperty { get; set; }
        public int TeacherId { get; set; }
        [ForeignKey("TeacherId")]
        public Persona Teacher { get; set; }
        public ICollection<Persona> Participants { get; set; }
    }

    public class Persona
    {
        public int Id { get; set; }
        public int Type { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }
}
