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

export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      //wenn ein überprüfung dann === und nicht =
      result.push("3")
    } else if (currentElement === "E") {
      result.push("3")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (input.length > 6) {
      return true
    } else {
      return false
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args.trim()
  const hexRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/
  return hexRegex.test(input)
}

linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  const input = args
  return input.charCodeAt(0)
}

linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  const input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      result = i
      break
    } else if (currentElement === "E") {
      result = i
      break
    }
  }

  return result
}

linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  let result = 0

  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]

    if (currentElement === "e") {
      result = i
      break
    } else if (currentElement === "E") {
      result = i
      break
    }
  }

  return result
}

linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  let result = 0
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      count = count + 1
      if (count === 3) {
        result = i
        break
      }
    }
  }

  return result === 0 ? -1 : result
}

linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === " ") {
      break
    }

    result.push(currentElement)
  }
  return result.join("") // text wird angezeigt
}

linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const index = args.indexOf("$")
  if (index === -1) {
    return [args]
  }
  const firstPart = args.slice(0, index)
  const secondPart = args.slice(index + 1)
  return [firstPart, secondPart]
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  const totalList = []
  const currentList = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === " ") {
      totalList.push(currentList.join(""))
      currentList.length = 0
    } else {
      currentList.push(currentElement)
    }
  }
  totalList.push(currentList.join(""))
  return totalList
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args
  const nameAndAge = aufgabe17(input)
  const result = []

  result.push("Sie heissen ")
  result.push(nameAndAge[0])
  result.push(" und sind ")
  result.push(nameAndAge[1])
  result.push(" Jahre alt")

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe19(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    result.push(currentElement)
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "." && nextElement === " ") {
    } else {
      return true
    }
    return false
  }
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []
  for (let i = input.length - 1; i >= 0; i--) {
    //wir gehen von hinten nach vorne, indem wir mit dem -1 bei input.lenghth von hinten beginnen
    const currentElement = input[i]
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []
  let foundk = false //wir prüfen, ob k bereits gefunden wurde

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (foundk) {
      //falls k gefunden wurde, bleiben die Zeichen unverändert
      result.push(currentElement)
    } else if (ascii >= 32 && ascii <= 94) {
      //wir geben den ASCII-Wert von allen zahlen und sonderzeichen ausser "_", um es zu erkennen

      result.push("_")
    } else if (ascii >= 96 && ascii <= 106) {
      // wir geben den ASCII-Wert von einem Sonderzeichen und den Kleinbuchstaben  a bis j ein, um diese zu erkennen
      result.push("_")
    } else if (ascii >= 108 && ascii <= 126) {
      // wir geben den ASCII-Wert von den Kleinbuchstaben l bis z und Sonderzeichen ein, um diese zu erkennen
      result.push("_")
    } else if (ascii === 107) {
      // wir geben den ASCII-Wert von "k" ein, um diese zu erkennen
      result.push("k")
      foundk = true
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(args) {
  const input = args
  const result = []

  if (input.length > 0) {
    const firstElement = input[0]
    result.push(firstElement + firstElement) //das erste Zeichen wird verdoppelt

    for (let i = 1; i < input.length; i++) {
      const currentElement = input[i]
      result.push(currentElement)
    }
    result.push(firstElement) // das erste Zeichen wird wieder hinzugefügen
  }
  return result.join("")
  //füge das Zeichen am ende hinzu
}
linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  const input = args
  if (input.length <= 1) {
    return input
    //falls die eingabe nur ein zeichen hat, bleibt es unverändert
  }
  const result = []

  const firstElement = input[0]
  const lastElement = input[input.length - 1] //das letzte Zeichen wird gespeichert und wir zählen von -1 ab

  result.push(lastElement) //das letzte Zeichen wird hinzugefügt

  for (let i = 1; i < input.length - 1; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }

  result.push(firstElement)
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

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

export function aufgabe26(args) {
  const input = args
  if (input.length <= 1) {
    return input
  }
  const first = input[0]
  const second = input[1]
  return first.localeCompare(second) > 0 ? second + first : first + second //Wenn der erste Zeichen kleiner ist als der zweite Zeichen dann sollen diese Zeichen getauscht werden
}
linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe27(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement >= "A" && currentElement <= "Z") {
      // Wenn das aktuelle Element ein Zeichen zwischen "A" und "Z" ist gibt der Counter true zuruck
      return true
    } else if (currentElement >= "A" && currentElement <= "Z") {
      // Wenn das aktuelle Element nicht ein Zeichen zwischen "A" und "Z" ist gibt der Counter false zuruck
      return false
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe28(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii >= 65 && ascii <= 90) {
      // Wenn der Zeichen zwischen den Ascii werten von 65 und 90 liegt(Grossbuchstaben) dann soll der Counter nichts machen.
    } else if (ascii >= 97 && ascii <= 122) {
      // Wenn der Zeichen zwischen den Ascii werten von 97 und 122 liegt(Kleinbuchstaben) dann soll der Counter nichts machen.
    } else {
      return true //Wenn keine der Bedingungen erfüllt sind, dann gibt der Counter "true" zuruck
    }
  }
  return false
}
linkupExerciseHandler("[data-click=aufgabe28]", aufgabe28)
