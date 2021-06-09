//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// Simply you have to replace A - T, T - A, C - G, G - C

function DNAStrand(dna){
  var result = "";
  for(var i = 0 ; i < dna.length ; i++){
    if(dna.charAt(i) == "A"){
      result += "T"
    }  if(dna.charAt(i) == "T"){
      result += "A"
    }  if(dna.charAt(i) == "C"){
      result += "G"
    }  if(dna.charAt(i) == "G"){
      result += "C"                     // charAt() method returns the character at the specified index in a string.
    } 
  }
  return result
}
DNAStrand ("ATTGC") // return "TAACG"
DNAStrand ("GTAT") // return "CATA" 
