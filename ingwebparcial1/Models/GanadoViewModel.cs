using system;
using system.ComponentModel.DataAnnotations;

namespace Models {

    public class Ganado{
        public int id {get; set;}
        public String tipoAnimal {get; set;}
        public String Nombre {get; set;}
        public int peso { get; set;}
        public String color {get;set;}
    }
    public class CrearTipoModel{
        public String tipo {get;set;}
        [Required]
        public String Nombre {get; set;}
        [Required]
        public int peso {get;set;}
        public String color {get;set;}

    }
    public class CambiarNombreModel {
        public int id {get;set;}
        public String nombre {get;set;}

    }
    public class PesarModel{
        public int id {get;set;}
        public int peso {get;set;}
    }
    public class BorrarModel{
        public int id {get;set;}
    }


}