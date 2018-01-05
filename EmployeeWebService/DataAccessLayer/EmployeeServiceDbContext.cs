using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeWebService.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeWebService.DataAccessLayer
{
    public class EmployeeServiceDbContext : DbContext
    {
        public EmployeeServiceDbContext(DbContextOptions<EmployeeServiceDbContext> options) : base(options)
        {

        }
        public DbSet<Employee> Employees { get; set; }
    }
}
