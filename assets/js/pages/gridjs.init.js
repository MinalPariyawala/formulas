new gridjs.Grid({
    columns: ["Name", "Email", "Position", "Company", "Country", "Action"],
    sort: !0,
    pagination: { limit: 5 },
    fixedHeader: !0,
    height: "400px",
    search: !0,
    data: [["Jonathan", "jonathan@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"], ["Harold", "harold@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"], ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"], ["Robert", "robert@example.com", "Product Accounts Technician", "Hoeger", "San Marino"], ["Noel", "noel@example.com", "Customer Data Director", "Howell - Rippin", "Germany"], ["Traci", "traci@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"], ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"], ["Patsy", "patsy@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"], ["Cathy", "cathy@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"], ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"]]
}).render(document.getElementById("table-fixed-header"));
   