using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Configuration;
using Microsoft.IdentityModel.Protocols;
using Npgsql;
using Microsoft.AspNetCore.Cors;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace plant_templates.Controllers
{

    [Route("api/[controller]/[action]")]
    [ApiController]
    public class HomeController : Controller
    {

        //string connString = "User ID=<user>;Password=<pass>;Host=<host>;Port=<port>;Database=<database>;Pooling=true;Use SSL Stream=True;SSL Mode=Require;TrustServerCertificate=True;"
        readonly string connString = "User Id=postgres;Password=postgres;Host=localhost;Port=5433;Database=plant_templates_test;Pooling=true;TrustServerCertificate=True;";

        // GET: api/<controller>
        [HttpGet]
        public string GetAllWeeks()
        {

            string ret = "";

            string command = "SELECT * FROM fn_get_all_weeks();";

            using (var conn = new NpgsqlConnection(connString))
            {
                conn.Open();

                //// Insert some data
                //using (var cmd = new NpgsqlCommand())
                //{
                //    cmd.Connection = conn;
                //    cmd.CommandText = "INSERT INTO data (some_field) VALUES (@p)";
                //    cmd.Parameters.AddWithValue("p", "Hello world");
                //    cmd.ExecuteNonQuery();
                //}

                // Retrieve all rows
                using (var cmd = new NpgsqlCommand(command, conn))
                using (var reader = cmd.ExecuteReader())
                    while (reader.Read())
                    {
                        ret = reader.GetString(0);
                    }
            }
            return ret;
        }

        // POST api/<controller>
        [HttpGet]
        public string AddNewWeek([FromBody]string value)
        {
            return value;
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
