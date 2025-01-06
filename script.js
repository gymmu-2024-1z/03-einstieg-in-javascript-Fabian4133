import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]
    if (currentElement === "e") {
      //do nothing
    } else {
      result.push(currentElement)
    }

    // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)
export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentLetter = input[i]
    // "ToUpperCase" konvertiert alle Zeichen in Grossbuchstaben
    const currentUpperCaseLetter = currentLetter.toUpperCase()

    result.push(currentUpperCaseLetter)
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args

  const result = []
  let count = 0 // Startet einen Counter mit dem Wert 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // èberprüft ob das aktuelle Elment "e" oder "E" ist
    if (currentElement === "e") {
      count = count + 1 // Wenn "e" gefunden wird, wird der Counter um 1 erhöht
    } else if (currentElement === "E") {
      count = count + 1 // Wenn "E" gefunden wird, wird der Counter um 1 erhöht
    }
  }
  return count // Der Counter wird zurückgegeben
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)
export function aufgabe04(args) {
  const input = args

  const result = []
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      // Wenn das aktuelle Element ein Leerzeichen ist wird der Counter um 1 erhöht
      count = count + 1
    }
  }
  return count + 1 // Wir sagen dem Couter er solle den Count nochmals um 1 erhöhen wenn er es uns zurückgibt, somit bliebt der Counter nicht bei 0 wenn es nur ein einziges Wort gibt und es kein Leerzeichen gibt
}
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement >= "A" && currentElement <= "Z") {
      // Wenn das aktuelle Element ein Zeichen zwischen "A" und "Z" ist gibt der Counter true zurück
      return true
    } else if (currentElement >= "A" && currentElement <= "Z") {
      // Wenn das aktuelle Element nicht ein Zeichen zwischen "A" und "Z" ist gibt der Counter false zuruck
      return false
    }
  }
}

linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii >= 65 && ascii <= 90) {
      // Wenn der Zeichen zwischen den Ascii werten von 65 und 90 liegt(Grossbuchstaben) dann soll der Counter nichts machen.
      //return true
    } else if (ascii >= 97 && ascii <= 122) {
      // Wenn der Zeichen zwischen den Ascii werten von 97 und 122 liegt(Kleinbuchstaben) dann soll der Counter nichts machen.
      //return true
    } else {
      return true //Wenn keine der Vorherigen Bedingungen erfüllt sind, dann gibt der Counter true zuruck
    }
  }
  return false
}

linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  return input.includes("und")
  //Wenn die Eingabe das Wort "und" enthalten soll der Counter true zuruck geben
}

linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      //Wenn die Eingabe den Zeichen "e" enthält wird es durch "3" ersetzt
      result.push("3")
    } else {
      result.push(currentElement) //Wenn ein anderer Zeichen gefunden wird, wird der aktuelle Zeichen behalten.
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  return input.length === 6 //Wenn die Anzahl Zeichen in der Eingabe 6 beträgt wird "true" zurück gegeben.
}

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args
  const regex = /^#([0-9A-F]{3}){1,2}$/i
  return regex.test(input) //Testet ob die Eingabe dem RGB Hexcode entspricht
}

linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)
export function aufgabe11(args) {
  const input = args
  return input.charCodeAt(0) //nimmt die erste Eingabe und wandelt sie in die Ascii Angabe um
}
linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  const input = args
  return input.indexOf("e") //gibt den Index von dem ersten gefundenen "e"
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  return input.lastIndexOf("e")
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  return input.toLowerCase()
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  return input.toUpperCase()
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  return input.charAt(0).toUpperCase() + input.slice(1)
}
linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  return input.charAt(0).toLowerCase() + input.slice(1)
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args
  return input.charAt(0).toUpperCase() + input.slice(1)
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe19(args) {
  const input = args
  return input.charAt(0).toLowerCase() + input.slice(1)
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  return input.charAt(0).toUpperCase() + input.slice(1)
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  return input.charAt(0).toLowerCase() + input.slice(1)
}
linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  return input.charAt(0).toUpperCase() + input.slice(1)
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(args) {
  const input = args
  return input.charAt(0).toLowerCase() + input.slice(1)
}
linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  const input = args
  if (input.length <= 1) {
    return input
  }
  return input[input.length - 1] + input.slice(1, -1) + input[0]
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(args) {
  const input = args
  if (input.length <= 1) {
    return input
  }
  const first = input[0]
  const second = input[1] //zählt den ersten und zweiten Zeichen der Eingabe
  return first.localeCompare(second) > 0 ? second + first : first + second //Wenn der erste Zeichen kleiner ist als der zweite Zeichen dann sollen diese Zeichen getauscht werden
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)
