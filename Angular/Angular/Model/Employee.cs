using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Angular.Model
{
    public class Employee
    {
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Surname { get; set; }
        public int Age { get; set; }
        public string Status { get; set; }
    }
}
