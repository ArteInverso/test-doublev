Teorico:
* Explica brevemente cómo se gestionan las direcciones y las transacciones en
Ethereum:
En Ethereum, las direcciones se utilizan para identificar las cuentas y las transacciones se utilizan para transferir valor y ejecutar operaciones. Cada transacción debe ser firmada con la clave privada correspondiente a la dirección de origen y pagar por el gas necesario. Los mineros validan las transacciones y las agrupan en bloques, formando la blockchain de Ethereum.

#Instalación

###Clona este repositorio
```
git clone https://github.com/ArteInverso/test-doublev.git
```
###Navega al directorio del proyecto:

cd nombre-del-repositorio

###Instala las dependencias:
```
npm install
```

###Configuración:
Antes de utilizar el proyecto, asegúrate de configurar adecuadamente los archivos de configuración.

Abre el archivo hardhat.config.js y realiza las configuraciones necesarias, como la selección de la red de pruebas Ethereum sepolia usando sus credenciales de ALCHEMY

###Compila el proyecto:
```
npx hardhat compile
```
###Ejecuta las pruebas:
```
npx hardhat test
```
###Despliega el contrato en la red seleccionada:
```
npx hardhat run scripts/deploy.js --network sepolia
```

#decisiones de diseño:

Uso de mapeos: Se utilizan dos mapeos para almacenar la información relacionada con los votos. El mapeo hasVoted almacena si un participante ha votado o no, utilizando la dirección del participante como clave. El mapeo voteCount almacena el recuento de votos por candidato, utilizando el nombre del candidato como clave y un entero sin signo como valor.

Evento para emitir votos: Se utiliza un evento llamado "Vote" para emitir información sobre los votos realizados. El evento incluye la dirección del votante y el nombre del candidato al que se emitió el voto. Los eventos son útiles para realizar seguimiento de las transacciones y permiten a los clientes de la blockchain escuchar y reaccionar a ciertos eventos.

Modificador de función: Se utiliza un modificador de función llamado "onlyNotVoted" para garantizar que un participante solo pueda votar una vez. El modificador verifica si el participante ha votado previamente antes de ejecutar la función. Si el participante ya ha votado, la transacción se revertirá con un mensaje de error.

Uso de cadenas de caracteres para nombres de candidatos: Los nombres de los candidatos se almacenan como cadenas de caracteres en lugar de utilizar otro tipo de identificador. Esto permite una mayor flexibilidad en la elección de nombres y facilita la legibilidad del código.