const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedData() {
  // Sample Electors
//   const electors = await prisma.electeur.createMany({
//     data: [
//       {
//         cni: "123456789A",
//         numeroElecteur: "ELE000001",
       
//       },
//       {
//         cni: "987654321B",
//         numeroElecteur: "ELE000002",
     
//       },
//       // Add more electors here
//     ],
//   });

//   // Sample Administrators
//   const admins = await prisma.administrateur.createMany({
//     data: [
//       {
//         email: "admin@example.com",
//         password: "admin",
//       },
//     ],
//   });

//   // Sample Elections
//   const elections = await prisma.election.createMany({
//     data: [
//       {
//         titre: "Election Présidentielle 2024",
//         description: "Votez pour votre prochain président!",
//         dateDebut: new Date("2024-06-10"),
//       },
//     ],
//   });
 const ficheElecteur = await prisma.ficheElecteur.createMany({
    data: [
      {
        cni: "123456789A",
        numeroElecteur: "ELE000001",
        
      },
      {
        cni: "987654321B",
        numeroElecteur: "ELE000002",
      },
    ],
  });
  // Sample Candidates (link to specific election)
//   const candidates = await prisma.candidat.createMany({
//     data: [
//       {
//         nom: "Candidat 1",
//         prenom: "Prenom 1",
//         cni: "123456789C",
//         electionId: elections[0].id, // Link to the created election
//         photoUrl: "https://example.com/candidate1.jpg",
//       },
//       {
//         nom: "Candidat 2",
//         prenom: "Prenom 2",
//         cni: "987654321D",
//         electionId: elections[0].id, // Link to the created election
//         photoUrl: "https://example.com/candidate2.jpg",
//       },
//     ],
//   });

  console.log("Data seeded successfully!");
}

seedData()
  .catch((e) => {
    console.error("Seeding failed!", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
