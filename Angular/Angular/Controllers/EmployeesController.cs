using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Angular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly EmployeesContext _context;

        public EmployeesController(EmployeesContext context)
        {
            _context = context;

            if (_context.EmployeeList.Count() == 0)
            {
                _context.EmployeeList.Add(new Employee
                    {Id = Guid.NewGuid(), Name = "Mari", Surname = "White"});
                _context.EmployeeList.Add(new Employee
                    {Id = Guid.NewGuid(), Name = "Kristo", Surname = "Black"});
                _context.EmployeeList.Add(new Employee
                    {Id = Guid.NewGuid(), Name = "Annabel", Surname = "Yellow"});
            }
        }

        [HttpGet]
        public IActionResult GetEmployees()
        {
            return Ok(_context.EmployeeList);
        }

        }
    }
