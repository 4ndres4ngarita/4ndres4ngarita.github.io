// Set the date we're counting down to
var countDownDate = new Date("Dec 12, 2026 16:37:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


var DATA_LAKE = {
  "becb2bf3-a644-401c-97f9-6359463a5ad8":{
    "invitado": "Andres & Natalia",
    "cupo": 2,
    "codigo": "becb2bf3-a644-401c-97f9-6359463a5ad8"
  },
  "73cb4c8e-cc0a-44bf-8963-cff79795cd4a":{
    "invitado": "Marina Gonzalez & Wilson Gonzalez",
    "cupo": 2,
    "codigo": "73cb4c8e-cc0a-44bf-8963-cff79795cd4a"
  },
  "4c68b957-7ebf-4852-a6da-a3d59d8cc183":{
    "invitado": "Luis Vera & Jeinny Gonzalez e hijos",
    "cupo": 4,
    "codigo": "4c68b957-7ebf-4852-a6da-a3d59d8cc183"
  },
  "60b9c2cf-41a6-4bfe-84f9-2459e7769379":{
    "invitado": "Jonathan Gonzalez & Erika Hernandez e hijo",
    "cupo": 3,
    "codigo": "60b9c2cf-41a6-4bfe-84f9-2459e7769379"
  },
  "71390679-6533-4ef6-a120-9c9639c9d10d":{
    "invitado": "Ferney Gonzalez & Sandra Valcarcel",
    "cupo": 2,
    "codigo": "71390679-6533-4ef6-a120-9c9639c9d10d"
  },
  "9bef43c9-27bc-46dc-aa66-1e44db0066ba":{
    "invitado": "Danizza Gonzalez",
    "cupo": 1,
    "codigo": "9bef43c9-27bc-46dc-aa66-1e44db0066ba"
  },
  "513cd714-01cd-4f09-9943-9d6620c421be":{
    "invitado": "Luciana Rodriguez",
    "cupo": 1,
    "codigo": "513cd714-01cd-4f09-9943-9d6620c421be"
  },
  "6a6e959d-1207-49a9-9da1-0b6a8840d229":{
    "invitado": "Kevin & Yaniris",
    "cupo": 2,
    "codigo": "6a6e959d-1207-49a9-9da1-0b6a8840d229"
  },
  "83ee2f07-f044-414b-a39a-21ba35373432":{
    "invitado": "Fabian Moncada & Kandy Hernadez",
    "cupo": 2,
    "codigo": "83ee2f07-f044-414b-a39a-21ba35373432"
  },
  "6c176654-eac1-41a5-b30a-f3ce518fb42d":{
    "invitado": "Judith Acosta",
    "cupo": 1,
    "codigo": "6c176654-eac1-41a5-b30a-f3ce518fb42d"
  },
  "c5bb2686-c209-49bb-8563-5e07613f6c7c":{
    "invitado": "Lendy Ravelo",
    "cupo": 1,
    "codigo": "c5bb2686-c209-49bb-8563-5e07613f6c7c"
  },
  "2d6d7cbc-2f2e-4a6d-a31a-c6ba0e0616a7":{
    "invitado": "Laura Sofia Ruiz",
    "cupo": 1,
    "codigo": "2d6d7cbc-2f2e-4a6d-a31a-c6ba0e0616a7"
  },
  "00e254dd-79d4-40b8-a9b0-6968123dd5f1":{
    "invitado": "Ana Sofia Herrera",
    "cupo": 1,
    "codigo": "00e254dd-79d4-40b8-a9b0-6968123dd5f1"
  },
  "3698818e-6f77-4d1c-baf6-3ccf1baf1ad3":{
    "invitado": "Diego Alejandro Gonzalez",
    "cupo": 1,
    "codigo": "3698818e-6f77-4d1c-baf6-3ccf1baf1ad3"
  },
  "2c621c6d-2727-4d8b-acc3-24cb28473f6b":{
    "invitado": "Veronica Hurtado",
    "cupo": 1,
    "codigo": "2c621c6d-2727-4d8b-acc3-24cb28473f6b"
  },
  "34f7f77f-9f06-460a-9620-73abeb77e23d":{
    "invitado": "Ps Carlos Estepa & Clarita",
    "cupo": 2,
    "codigo": "34f7f77f-9f06-460a-9620-73abeb77e23d"
  },
  "a171c9e7-30bc-46b2-a6f3-afd5de11d6e1":{
    "invitado": "Ps Leonardo & Leidy",
    "cupo": 2,
    "codigo": "a171c9e7-30bc-46b2-a6f3-afd5de11d6e1"
  },
  "ebfa8013-c942-4d03-bc7a-afdbcf3a2ed2":{
    "invitado": "Fotografo",
    "cupo": 1,
    "codigo": "ebfa8013-c942-4d03-bc7a-afdbcf3a2ed2"
  },
  "b5ebc5e5-f7aa-4cc7-a495-dc494b3e3eb2":{
    "invitado": "Jose Manuel & Lucero Sanchez",
    "cupo": 2,
    "codigo": "b5ebc5e5-f7aa-4cc7-a495-dc494b3e3eb2"
  },
  "fd2ef780-d8a3-4845-88f0-71681b62f89e":{
    "invitado": "Laura Angarita & Henry Amado",
    "cupo": 2,
    "codigo": "fd2ef780-d8a3-4845-88f0-71681b62f89e"
  },
  "755c1817-f024-4340-a002-fac46c996a79":{
    "invitado": "Aurora Sanchez e Hijos",
    "cupo": 3,
    "codigo": "755c1817-f024-4340-a002-fac46c996a79"
  },
  "3505646c-f86b-4b67-a95f-f9863670bd5c":{
    "invitado": "Nestor Marin",
    "cupo": 1,
    "codigo": "3505646c-f86b-4b67-a95f-f9863670bd5c"
  },
  "19d3c058-18cd-43d2-a60a-70ee94d3081d":{
    "invitado": "Paula Andrea Sanchez",
    "cupo": 1,
    "codigo": "19d3c058-18cd-43d2-a60a-70ee94d3081d"
  },
  "dc6a02cf-039f-4b0b-b1c2-da7a62c6f684":{
    "invitado": "Julio Sanchez",
    "cupo": 1,
    "codigo": "dc6a02cf-039f-4b0b-b1c2-da7a62c6f684"
  },
  "518fd06e-cb12-4b90-87b1-c964b5a139e9":{
    "invitado": "Barbara Daza",
    "cupo": 1,
    "codigo": "518fd06e-cb12-4b90-87b1-c964b5a139e9"
  },
  "250b9dc3-1bfd-4a8e-a23c-3b367dee01da":{
    "invitado": "Lazaro Sanchez",
    "cupo": 1,
    "codigo": "250b9dc3-1bfd-4a8e-a23c-3b367dee01da"
  },
  "9d58b11d-c0d8-4712-b9a6-324e711ff988":{
    "invitado": "Consuelo Guerrero",
    "cupo": 1,
    "codigo": "9d58b11d-c0d8-4712-b9a6-324e711ff988"
  },
  "09d7be1c-04b2-4e77-9779-465bc6a6b7e6":{
    "invitado": "sra. Beatriz & sr. David",
    "cupo": 2,
    "codigo": "09d7be1c-04b2-4e77-9779-465bc6a6b7e6"
  },
  "bdb8af9c-3ada-4316-880f-f9b79c8b86d0":{
    "invitado": "Samuel Guzman",
    "cupo": 1,
    "codigo": "bdb8af9c-3ada-4316-880f-f9b79c8b86d0"
  },
  "bd1536db-ae0a-4885-867f-82e69741a391":{
    "invitado": "Fernando Angarita",
    "cupo": 1,
    "codigo": "bd1536db-ae0a-4885-867f-82e69741a391"
  },
  "e4ca191f-d115-425d-adfa-5e2a324b7e60":{
    "invitado": "Luz Belia & Juan Carlos",
    "cupo": 2,
    "codigo": "e4ca191f-d115-425d-adfa-5e2a324b7e60"
  },
  "4c02dad3-005b-461a-b220-3e9940769466":{
    "invitado": "Mariela & Esposo",
    "cupo": 2,
    "codigo": "4c02dad3-005b-461a-b220-3e9940769466"
  },
  "c45764af-de7b-406c-b2fd-7660b8084374":{
    "invitado": "Gustavo Mendez & Señora",
    "cupo": 2,
    "codigo": "c45764af-de7b-406c-b2fd-7660b8084374"
  },
  "9c4b4713-1e21-444a-9326-389678426621":{
    "invitado": "Familia Duarte Contreras",
    "cupo": 4,
    "codigo": "9c4b4713-1e21-444a-9326-389678426621"
  },
  "f7b7965e-a0e8-4a19-97c7-a3326d55e5cf":{
    "invitado": "Luis & Melisa",
    "cupo": 2,
    "codigo": "f7b7965e-a0e8-4a19-97c7-a3326d55e5cf"
  },
  "8af19887-7cff-44a1-b929-0f72052deb2d":{
    "invitado": "Alejandro & Mile",
    "cupo": 2,
    "codigo": "8af19887-7cff-44a1-b929-0f72052deb2d"
  },
  "9d9384af-c610-471d-bde4-49214b979541":{
    "invitado": "Javier & Leslie",
    "cupo": 2,
    "codigo": "9d9384af-c610-471d-bde4-49214b979541"
  },
  "0478055c-9e8f-4aaf-a341-0251a919ba65":{
    "invitado": "Anngye Sanchez",
    "cupo": 1,
    "codigo": "0478055c-9e8f-4aaf-a341-0251a919ba65"
  },
  "5f196a63-520e-4549-936a-639460443f33":{
    "invitado": "Sneyder Gomez",
    "cupo": 1,
    "codigo": "5f196a63-520e-4549-936a-639460443f33"
  },
  "ffb3a3a1-6c68-4016-8770-d07c82d43f64":{
    "invitado": "Santiago Salcedo",
    "cupo": 1,
    "codigo": "ffb3a3a1-6c68-4016-8770-d07c82d43f64"
  },
  "30bb7206-57cb-4bc7-82d6-869aa05d6844":{
    "invitado": "Gloria Angarita",
    "cupo": 1,
    "codigo": "30bb7206-57cb-4bc7-82d6-869aa05d6844"
  },
  "c13042b1-dbfb-4058-babb-cf1fa6b85b41":{
    "invitado": "Socorro Angarita",
    "cupo": 1,
    "codigo": "c13042b1-dbfb-4058-babb-cf1fa6b85b41"
  },
  "f0594949-0b0c-4b8c-b7de-6c6d9294c3f3":{
    "invitado": "Jorge Arenas & Señora",
    "cupo": 2,
    "codigo": "f0594949-0b0c-4b8c-b7de-6c6d9294c3f3"
  },
  "6188d471-e02f-4c47-a81e-a53793369427":{
    "invitado": "Junior Angarita",
    "cupo": 2,
    "codigo": "6188d471-e02f-4c47-a81e-a53793369427"
  },
  "eebe2de1-5e0e-488a-81ed-55b4f84f1f02":{
    "invitado": "Familia Saliba Guzman",
    "cupo": 3,
    "codigo": "eebe2de1-5e0e-488a-81ed-55b4f84f1f02"
  },
  "0be35435-3056-43b7-84a0-d8f20057dd07":{
    "invitado": "Sra.Matha",
    "cupo": 1,
    "codigo": "0be35435-3056-43b7-84a0-d8f20057dd07"
  },
  "e89bbd9c-a3d2-4c53-adff-099cf3776554":{
    "invitado": "Familia Guzman Arenas",
    "cupo": 4,
    "codigo": "e89bbd9c-a3d2-4c53-adff-099cf3776554"
  },
  "5af0c9c7-4ff9-428e-a031-dcb669139f1b":{
    "invitado": "Familia Vargas Herrera",
    "cupo": 5,
    "codigo": "5af0c9c7-4ff9-428e-a031-dcb669139f1b"
  },
  "d2544c87-daa3-4957-815e-9a527e8d8dca":{
    "invitado": "Roger Chaparro",
    "cupo": 1,
    "codigo": "d2544c87-daa3-4957-815e-9a527e8d8dca"
  },
  "7b740066-fdf3-4709-9d11-9a6f9d901e8b":{
    "invitado": "Julie Vera",
    "cupo": 1,
    "codigo": "7b740066-fdf3-4709-9d11-9a6f9d901e8b"
  },
  "731c182c-7ff3-4d1f-b4a4-695cddd8428e":{
    "invitado": "Karen Afanador",
    "cupo": 1,
    "codigo": "731c182c-7ff3-4d1f-b4a4-695cddd8428e"
  },
  "be4a83bf-ddb8-4804-be20-6a729c3f78fa":{
    "invitado": "Joshua Navarro",
    "cupo": 1,
    "codigo": "be4a83bf-ddb8-4804-be20-6a729c3f78fa"
  },
  "85964a26-37a6-492d-97af-8f878eb6f619":{
    "invitado": "Zaryler",
    "cupo": 1,
    "codigo": "85964a26-37a6-492d-97af-8f878eb6f619"
  },
  "ef9cc55f-e343-4100-b1be-285b00dc5529":{
    "invitado": "Ronald Cruz",
    "cupo": 1,
    "codigo": "ef9cc55f-e343-4100-b1be-285b00dc5529"
  },
  "b856663b-4830-4623-bb72-bc4ffa629f18":{
    "invitado": "Juliana Rios",
    "cupo": 1,
    "codigo": "b856663b-4830-4623-bb72-bc4ffa629f18"
  },
  "9b2bfdc6-da1f-4a8e-8ded-09e840ddbe4a":{
    "invitado": "Consuelo Parra",
    "cupo": 1,
    "codigo": "9b2bfdc6-da1f-4a8e-8ded-09e840ddbe4a"
  },
  "416c3946-d7e7-4754-ba60-84e65a1e7882":{
    "invitado": "Luz Adriana Salamanca",
    "cupo": 1,
    "codigo": "416c3946-d7e7-4754-ba60-84e65a1e7882"
  }
}

