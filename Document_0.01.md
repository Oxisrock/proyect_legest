El día 17/05/17 se propusieron los siguientes puntos

1) ¿El proyecto como será el modo de empleo?
  {
   -Sera mensual con un tiempo estimado min 6 meses Max 8 meses
  }
2) ¿Cual son las tecnologías utilizadas para el desarrollo del proyecto?
  En el Frontend será React Sera 100% response design
  En el Backend será Nodejs
  Como base de datos se utilizara Mongodb
  Servidor donde se levantara no se ha determinado todavía
  "Me gustaría probar servidor nginx"
3) ¿Definición del proyecto interpretada por el cliente?
  Sera una red social para artesanos que quieran mostrar sus servicios y empresas
  Que soliciten dichos servicios
  El cliente ha expuesto un ejemplo:
  (Podemos poner un ejemplo mucho mejor)
4) ¿Cómo será la estrategia de desarrollo que aplicaremos?
  {
  - Sera mediante MVC (Models, Views y Controllers)
  - El primer módulo el cual empezaremos Sera el método Rest de los usuarios
  - "Tengo una duda acá no sé si empezar por frontend y después por el backend,
  - Pero lo más probable sea por el frontend para poder mostrarle al cliente en
  Lo que estamos trabajando”
  - También Sera una SPA (SinglePageApplication)
  }
5) ¿Cuáles serían las fechas los cortes de desarrollo para entregarle un porcentaje cada mes que pasa?
  {
    - "Aquí no se cómo serían pero tendríamos que reunirnos los 3 y consolidar esto bien"
  }
6) ¿Cuáles vistas tendrá esta aplicación?
  - Registro de usuarios (Signup)
  {
    - una típica vista de registro si no está registrado se registre  y si ya lo esté vaya a la vista de login
    - El usuario se podrá registrarse con otras redes sociales como Facebook, twitter o linkedin
    - Se tendra un nivel de permisos de usuarios seran los siguientes niveles
      - nivel 1 seran para los artesanos = solo podran montar estados, actualizar, eliminar comentarios y modificar sus perfiles a su antojo.
      Siempre y cuando no violen los Terminos de acuerdo
      - nivel 2 sera para las empresas  = Sera casi igual que la de los artesano lo cual no podra eliminar sus proyectos ya en procesos hasta que no hayan culminado o pase un desacuerdo entre el artesano y la empresa en caso esto ira a un juicio por un moderador
      - nivel 3 sera para los administradores o moderadores = Estos seran los responsables del bienestar entre los artesanos y las empresas,
      estas personas  seran propuestas por los administradores del proyecto son lo que seran lo que lleven alguna negociacion donde los Terminos
      de esta negociacion no se cumplan en cualquiera de los 2 bandos sea un artesano irresponsable o una empresa que se quiera pasar de lista decir que el artesano no cumplio cuando sea mentira.
      Este nivel sera el unico en poder sancionar a los artesanos o empresas
      "No se si esta parte todavia esta por discutir "
      - nivel 4 una jerarquia especial solo para administrador total = Estos seran los super usuarios que podran ser un todo poderoso en la aplicacion eliminar sancionar baniar a cualquier usuario que ponga en peligro la integrida de otros usuarios o a la aplicacion
  }
  - Logeo de usuarios (Login)
  {
    - una típica vista de login si ya está registrado y si se quiere registrar
  }
  - Perfil de usuarios (Profiles)
  {
    - Estos perfiles serán total mente personalizados por el usuario tanto como el de empresa como el de artesano
    - Aquí se podrán ver las recomendaciones de empresas tanto malas como buenas a los artesanos tanto como los artesanos pueden hablar de las empresas
    - Se podría implementar algún tipo de nivel de experiencia en la app o puede ser según los trabajos que haya realizado este artesano
  }
  - Notificaciones (Notifications)
  {
    - Sera la vista donde se recibirán las notificaciones cuando un usuario o una empresa está interesado en el servicio
    - también donde recibirá si la empresa ya realizo su pago a nosotros y cuando nosotros le paguemos a el artesano
    - también de mensaje y comentarios de fotos y todo
    - "podría aplicarse un chat privado"
  }
  - Propuestas de Búsquedas servicios (Propuests_Services)
  {
    - Las empresas podrán montar el servicio que necesita y de una vez un monto Max que es capaz de pagar por este servicio
    No se tendría que ver cómo va evolucionando
    - Los usuarios o artesanos que se postulen para este servicio de una vez se ponga en contacto con la empresa
    Diciendo cuanto va a cobrar por el servicio y en donde esta
    - Para que la empresa pueda contratar a alguien tiene que poner el dinero que le va a pagar a esta persona tiene que ser el dinero
    Que haya quedado en acuerdo al momento de la contratación y depositarlo en este caso en algo como mercado pago
    Para poder llegarle una notificación al artesano que el pago ya está en nuestras manos y que es seguro que preste su servicio
    - También para los artesanos será después que el termine el trabajo la empresa tiene que decirnos que está satisfecho con el servicio
    O se le fue echo el servicio en caso de que no haga este servicio se podría montar una sanción a este artesano y devolverle el dinero a
    La empresa, en el caso de que la empresa no este satisfecha con este servicio tiene que montar todo lo que el recibió por el artesano y
    Se pondría en un seguimiento esto verificar los términos y condiciones algo podemos hacer acá seria montar una sanción tanto al artesano
    Como a la empresa en caso de que el artesano haya echo su servicio y todo este bien podemos hacer un tipo de nivel de calidad de trabajo
    Si el usuario no le gusto sería una mancha para el expediente de este artesano no se esto tiene que ser más profundizado.
  }
  - Son las vistas que se me vienen en mente
7) ¿Cómo se trabajara el desarrollo de la aplicación?
  {
  - Sera atravez de módulos por cada módulo será echa backend y después el frontend
  - Dependiendo la extensión de estos módulos será una estima de tiempo un módulo por mes
  - El desempeño de los desarrolladores será por objetivos cumplidos
  - "Todavía por discutir más puntos”
  - Sera los días de entrega "Todavía por discutir"
  }
8) ¿Cual será el primer módulo en desarrollar?
  {
  - El Primer módulo será el de registro de usuarios toda la parte backend y después de hacerla la parte frontend
  - "Puede ser cambiante este punto”
  }
9) ¿Dónde se montara el desarrollo de esta aplicación en un Hosting Dedicado o un Servidor Cloud (En la nube)?
  {
  - Esta decisión todavía está por discutir entre los desarrolladores y los clientes
  - "Pero yo voto por un cloud puede ser digitalocean u otro que el cliente esté dispuesto a pagar"
  }
10) ¿La aplicación será escalable?
  {
  - Por supuesto con las herramientas que se desarrollara tendrán mucho tiempo en mercado
  - Sera completamente escalable y después de desarrollarla al 100% podrá tener encuentra una aplicación para androide e idos
  - "Siempre y cuando que los clientes decidan"
  }
9:45 pm del dia 18/05/17
{
  - Faltan algunas cosas mañana término otros puntos que se tocaron en la reunión
}
10:30 pm del dia 19/05/17
{
  - ya e agregado con la informacion que tenia y ideas que e tomado encuenta y gleider a propuesto no se que mas agregar por que no tengo
mucha mas info
}
