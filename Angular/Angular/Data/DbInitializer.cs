using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular.Model;

namespace Angular.Data
{
    public static class DbInitializer
    {
        public static void Initialize(EmployeesContext context)
        {
            context.Database.EnsureCreated();

            if (context.EmployeeList.Any())
            {
                return;
            }

            var employees = new Employee[]
            {
                new Employee {Name = "lala",Surname ="blabla" },
                new Employee {Name = "lala",Surname ="blabla" },
                new Employee {Name = "lala",Surname ="blabla" }
            };
            foreach (Employee employee in employees)
            {
                context.EmployeeList.Add(employee);
            }

            context.SaveChanges();
        }
    }
}
