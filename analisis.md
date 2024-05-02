## Escenario de análisis

_A continuación, suponga que la empresa le ha solicitado agregar la funcionalidad de manejo de
asistencia de los empleados. Estos pueden trabajar en distintos centros de trabajo según una
planificación mensual, y esta asistencia se corrobora diariamente mediante llamadas telefónicas a
los encargados de cada centro de trabajo._

## Diseño de la solución

### Diseño de la base de datos

**Entidades por implementar:** Roles, WorkCenters y Assists._  
**Roles:** \_La entidad Roles nos servira para determinar el tipo de usuario dentro de la plataforma. Tendrá los siguientes atributos: ID, name, description, permissions, status._
![Texto alternativo](https://github.com/JennerB-95/front-prueba/blob/main/src/assets/md/tabla_roles.png)  
**WorkCenters:** _La entidad WorkCenters nos servira para determinar la ubicación del equipo, ya sea que se manejen diferentes sucursales. Tendrá los siguientes atributos: ID, name, location, employee (manager)._  
![Texto alternativo](https://github.com/JennerB-95/front-prueba/blob/main/src/assets/md/tabla_work.png)  
**Assists:** _La entidad Assists nos servira para mantener un control efectivo de las asistencias por empleado. Tendrá los siguientes atributos: Employee ID, date, attendance status (present/absent)._  
![Texto alternativo](https://github.com/JennerB-95/front-prueba/blob/main/src/assets/md/tabla_asistencia.png)

### Relaciones

_Un usuario puede tener diferentes roles y permisos, por lo que se realizaran dos tipos de usuario, usuario administrador y usuario empleado.  
Un centro de trabajo puede tener múltiples empleados.  
La asistencia se registra de forma diaria por cada empleado._

### Diseño de la interfaz de usuario (UI)

_Pantalla de inicio de sesión para administradores y empleados.  
Para administradores:  
Panel de control para gestionar empleados, unidades, departamentos, usuarios, roles, centros de trabajo y registrar asistencias.  
Visualización de registros de asistencia, filtrados por fecha, centro de trabajo, etc.  
Para empleados:  
Vista de su propio horario de trabajo y asistencias pasadas.  
Opción para solicitar cambios de horario o notificar ausencias.  
(Opcional) Vista para registrar la asistencia diaria de los empleados, ya sea manualmente o mediante alguna forma de integración con sistemas de control de acceso._

### Proceso de registro de asistencia:

_Permitir a los encargados de cada centro de trabajo registrar la asistencia diaria de los empleados a través de la interfaz de usuario.  
Los registros de asistencia se asociarían con cada empleado y contendrían información sobre la fecha, la hora de entrada, la hora de salida._

### Proceso de verificación de asistencia:

_El sistema puede generar informes diarios de asistencia que se envían automáticamente a los administradores y supervisores.  
Los administradores pueden revisar estos informes y tomar medidas según sea necesario.  
Estos informes pueden incluir una lista de empleados, su estado de asistencia y cualquier anomalía detectada._

### Seguridad y privacidad:

_Implementar medidas de seguridad, como autenticación de dos factores y encriptación de datos, para proteger la información confidencial de los empleados.  
Limitar el acceso a la información de asistencia solo a los usuarios autorizados, como administradores y supervisores._

## Diagrama Entidad Relacion

![Texto alternativo](https://github.com/JennerB-95/front-prueba/blob/main/src/assets/md/entidad_relacion.png)

## Mockups pantallas de operación

### Pantalla de Roles

_Usuario encargado del sistema podrá gestionar información sobre roles (CRUD)_
![Texto alternativo](https://github.com/JennerB-95/front-prueba/blob/main/src/assets/md/cap_1.jpg)

### Pantalla de WorkCenters

_Usuario encargado del sistema podrá gestionar información sobre centros de trabajo (CRUD)_
![Texto alternativo](https://github.com/JennerB-95/front-prueba/blob/main/src/assets/md/cap_2.jpg)

### Pantalla de Assists

_Usuario encargado del sistema podrá gestionar información sobre asistencias (CRUD)_
![Texto alternativo](https://github.com/JennerB-95/front-prueba/blob/main/src/assets/md/cap_3.jpg)
