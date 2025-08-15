// document.getElementById("btn").addEventListener("click", async () => {
//     try {
//                               const studentToken = localStorage.getItem("studentToken");


//       const response = await axios.get("http://127.0.0.1:7500/admin/jobs",{
//         headers: {
//           Authorization: `Bearer ${studentToken}`
//         }
//       });
//       const jobs = response.data;
//       const tbody = document.getElementById("job-table-body");
  
//       // Clear existing table rows
//       tbody.innerHTML = "";
  
//       // Iterate over each job and create table rows
//       jobs.forEach(job => {
//         const row = document.createElement("tr");
  
//         const jobIdCell = document.createElement("td");
//         jobIdCell.textContent = job.Jobid;
//         row.appendChild(jobIdCell);
  
//         const designationCell = document.createElement("td");
//         designationCell.textContent = job.Designation;
//         row.appendChild(designationCell);
  
//         const experienceCell = document.createElement("td");
//         experienceCell.textContent = job.ExperienceRequired;
//         row.appendChild(experienceCell);
  
//         const salaryCell = document.createElement("td");
//         salaryCell.textContent = job.salary;
//         row.appendChild(salaryCell);
  
//         tbody.appendChild(row);
//       });
//     } catch (error) {
//       console.error("Error fetching job data:", error);
//     }
//   });
  document.getElementById("btn").addEventListener("click", async () => {
  console.log("Button clicked"); 

  try {
    const studentToken = localStorage.getItem("studentToken");
    console.log("Student Token:", studentToken);

    const response = await axios.get("http://127.0.0.1:7500/admin/jobs", {
      headers: {
        Authorization: `Bearer ${studentToken}`
      }
    });

    console.log("API Response:", response.data); 

    const jobs = Array.isArray(response.data)
      ? response.data
      : response.data.jobs || [];

    console.log("Parsed jobs:", jobs); 

    const tbody = document.getElementById("job-table-body");
    tbody.innerHTML = "";

    if (jobs.length === 0) {
      alert("No job records available."); 
      return;
    }

    jobs.forEach(job => {
      const row = document.createElement("tr");

      const jobIdCell = document.createElement("td");
      jobIdCell.textContent = job.Jobid;
      row.appendChild(jobIdCell);

      const designationCell = document.createElement("td");
      designationCell.textContent = job.Designation;
      row.appendChild(designationCell);

      const experienceCell = document.createElement("td");
      experienceCell.textContent = job.ExperienceRequired;
      row.appendChild(experienceCell);

      const salaryCell = document.createElement("td");
      salaryCell.textContent = job.salary;
      row.appendChild(salaryCell);

      tbody.appendChild(row);
    });

  } catch (error) {
    console.error("Error fetching job data:", error);
    alert("Failed to load jobs. Please try again later.");
  }
});