using Microsoft.EntityFrameworkCore;


namespace Angular.Model
{
    public class EmployeesContext : DbContext
    {
        public EmployeesContext(DbContextOptions<EmployeesContext> options) : base(options)
        {
        }
        public DbSet<Employee> EmployeeList { get; set; }
}
}
