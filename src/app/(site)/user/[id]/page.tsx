import { getUserById } from "@/utils/getUserById";
import { notFound } from "next/navigation";

import styles from '../../../_styles/user.module.css'
import Image from "next/image";

interface props {
  id: number
}

export default async function UserDetailsPage(params:props) {

  console.log(params.id);
  

  // const user = await getUserById(params.id)

  // Redireccionar a la pagina de 404 si no encuentra un usuario con el id proporcionado
  // if(!user) {
  //   notFound()
  // }

  return (
    <div className={styles.container}>

<h1>{params.id}</h1>

      {/* <div className={styles.profile}>
        <Image
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          width={128}
          height={128}
          className={styles.profileImage}
        />
        <h1 className={styles.name}>{user.firstName} {user.lastName}</h1>
        <p className={styles.username}>@{user.username}</p>
      </div>

      <div className={styles.infoSection}>
        <h2>Personal Information</h2>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address.address}, {user.address.city}, {user.address.state}</p>
        <p><strong>Birth Date:</strong> {user.birthDate}</p>
      </div>

      <div className={styles.infoSection}>
        <h2>Company Information</h2>
        <p><strong>Company:</strong> {user.company.name}</p>
        <p><strong>Position:</strong> {user.company.title}</p>
        <p><strong>Department:</strong> {user.company.department}</p>
        <p><strong>Office:</strong> {user.company.address.city}, {user.company.address.state}</p>
      </div>

      <div className={styles.infoSection}>
        <h2>Appearance</h2>
        <p><strong>Eye Color:</strong> {user.eyeColor}</p>
        <p><strong>Hair:</strong> {user.hair.type}, {user.hair.color}</p>
      </div> */}
    </div>
  );
}