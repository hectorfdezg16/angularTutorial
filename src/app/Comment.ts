/*hemos creado esta interfaz (que tipo de dato o como vamos a recibir nuestras publicaciones)
para utilizarlo habrá que exportarlo*/
export interface Comment{
    "postId": number;
    "id": number;
    "name": string;
    "email": string;
    "body": string;
}