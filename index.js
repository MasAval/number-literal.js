function getNumberLiteral(n) {
  var m0, cm, dm, um, cmi, dmi, umi, ce, de, un, hlp, decimal;

  if (isNaN(n)) {
    alert("La Cantidad debe ser un valor Numérico.");
    return null;
  }

  m0 = parseInt(n / 1000000000000);
  rm0 = n % 1000000000000;
  m1 = parseInt(rm0 / 100000000000);
  rm1 = rm0 % 100000000000;
  m2 = parseInt(rm1 / 10000000000);
  rm2 = rm1 % 10000000000;
  m3 = parseInt(rm2 / 1000000000);
  rm3 = rm2 % 1000000000;
  cm = parseInt(rm3 / 100000000);
  r1 = rm3 % 100000000;
  dm = parseInt(r1 / 10000000);
  r2 = r1 % 10000000;
  um = parseInt(r2 / 1000000);
  r3 = r2 % 1000000;
  cmi = parseInt(r3 / 100000);
  r4 = r3 % 100000;
  dmi = parseInt(r4 / 10000);
  r5 = r4 % 10000;
  umi = parseInt(r5 / 1000);
  r6 = r5 % 1000;
  ce = parseInt(r6 / 100);
  r7 = r6 % 100;
  de = parseInt(r7 / 10);
  r8 = r7 % 10;
  un = parseInt(r8 / 1);

  // r9=r8%1;
  // 999123456789
  if (n < 1000000000000 && n >= 1000000000) {
    tmp = n.toString();
    s = tmp.length;
    tmp1 = tmp.slice(0, s - 9);
    tmp2 = tmp.slice(s - 9, s);

    tmpn1 = getNumberLiteral(tmp1);
    tmpn2 = getNumberLiteral(tmp2);

    if (tmpn1.indexOf("Un") >= 0) pred = " Billón ";
    else pred = " Billones ";
    return tmpn1 + pred + tmpn2;
  }

  if (n < 10000000000 && n >= 1000000) {
    mldata = letras(cm, dm, um);
    hlp = mldata.replace("Un", "*");
    if (hlp.indexOf("*") < 0 || hlp.indexOf("*") > 3) {
      mldata = mldata.replace("Uno", "un");
      mldata += " Millones ";
    } else {
      mldata = "Un Millón ";
    }

    mdata = letras(cmi, dmi, umi);

    cdata = letras(ce, de, un);

    if (mdata != " ") {
      if (n == 1000000) {
        mdata = mdata.replace("Uno", "un") + "de";
      } else {
        mdata = mdata.replace("Uno", "un") + " mil ";
      }
    }

    return mldata + mdata + cdata;
  }
  if (n < 1000000 && n >= 1000) {
    mdata = letras(cmi, dmi, umi);
    cdata = letras(ce, de, un);
    hlp = mdata.replace("Un", "*");
    if (hlp.indexOf("*") < 0 || hlp.indexOf("*") > 3) {
      mdata = mdata.replace("Uno", "un");
      return mdata + " mil " + cdata;
    } else return "Mil " + cdata;
  }
  if (n < 1000 && n >= 1) {
    return letras(ce, de, un);
  }
  if (n == 0) {
    return " Cero";
  }
  return "No disponible";
}

function letras(c, d, u) {
  var centenas, decenas, decom;
  var lc = "";
  var ld = "";
  var lu = "";
  centenas = eval(c);
  decenas = eval(d);
  decom = eval(u);
  switch (centenas) {
    case 0:
      lc = "";
      break;
    case 1:
      {
        if (decenas == 0 && decom == 0) lc = "Cien";
        else lc = "Ciento ";
      }
      break;
    case 2:
      lc = "Doscientos ";
      break;
    case 3:
      lc = "Trescientos ";
      break;
    case 4:
      lc = "Cuatrocientos ";
      break;
    case 5:
      lc = "Quinientos ";
      break;
    case 6:
      lc = "Seiscientos ";
      break;
    case 7:
      lc = "Setecientos ";
      break;
    case 8:
      lc = "Ochocientos ";
      break;
    case 9:
      lc = "Novecientos ";
      break;
  }
  switch (decenas) {
    case 0:
      ld = "";
      break;
    case 1:
      {
        switch (decom) {
          case 0:
            ld = "Diez";
            break;
          case 1:
            ld = "Once";
            break;
          case 2:
            ld = "Doce";
            break;
          case 3:
            ld = "Trece";
            break;
          case 4:
            ld = "Catorce";
            break;
          case 5:
            ld = "Quince";
            break;
          case 6:
            ld = "Dieciseis";
            break;
          case 7:
            ld = "Diecisiete";
            break;
          case 8:
            ld = "Dieciocho";
            break;
          case 9:
            ld = "Diecinueve";
            break;
        }
      }
      break;
    case 2:
      ld = "Veinte";
      break;
    case 3:
      ld = "Treinta";
      break;
    case 4:
      ld = "Cuarenta";
      break;
    case 5:
      ld = "Cincuenta";
      break;
    case 6:
      ld = "Sesenta";
      break;
    case 7:
      ld = "Setenta";
      break;
    case 8:
      ld = "Ochenta";
      break;
    case 9:
      ld = "Noventa";
      break;
  }
  switch (decom) {
    case 0:
      lu = "";
      break;
    case 1:
      lu = "Uno";
      break;
    case 2:
      lu = "Dos";
      break;
    case 3:
      lu = "Tres";
      break;
    case 4:
      lu = "Cuatro";
      break;
    case 5:
      lu = "Cinco";
      break;
    case 6:
      lu = "Seis";
      break;
    case 7:
      lu = "Siete";
      break;
    case 8:
      lu = "Ocho";
      break;
    case 9:
      lu = "Nueve";
      break;
  }

  if (decenas == 1) {
    return lc + ld;
  }
  if (decenas == 0 || decom == 0) {
    return lc + " " + ld + lu;
  } else {
    if (decenas == 2) {
      ld = "Veinti";
      return lc + ld + lu.toLowerCase();
    } else {
      return lc + ld + " y " + lu;
    }
  }
}

function numberToText(n) {
  num = n.split(",");
  numentero = num[0];
  numdecimal = num[1];

  resultado = getNumberLiteral(numentero);

  if (numdecimal != "" && numdecimal != undefined) {
    resultado += " coma " + getNumberLiteral(numdecimal);
  }

  resultado = resultado.replace(/Veintiuno/g, "Veintiún");
  resultado = resultado.replace(/Veintitres/g, "veintitrés");
  resultado = resultado.replace(/  /g, " ");
  return resultado.trim();
}

module.exports = { numberToText: numberToText };
