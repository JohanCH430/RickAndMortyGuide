> Why do I have a folder named ".expo" in my project?
The ".expo" folder is created when an Expo project is started using "expo start" command.
> What do the files contain?
- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "settings.json": contains the server configuration that is used to serve the application manifest.
> Should I commit the ".expo" folder?
No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
Upon project creation, the ".expo" folder is already added to your ".gitignore" file.

>Explicación a mi solución
Obtengo el texto introducido (TextInput, utilizando [text, onChangeText]) una vez pulsado el botón recorro el listado obtenido anteriormente (utilizando [characters, setCharacters]) 
para buscar el nombre del personaje introducido.
Si la búsqueda coincide obtengo la url de la imagen y la actualizo. (utilizando [characterImage, setCharacterImage])
Si no coincide reinicio la imagen si no se encuentra el personaje: setCharacterImage(null)

-Johan Cruz Huertas