from django.core.exceptions import ValidationError

def validate_cedula(value):
    cedula = value.replace("-", "").strip()
    if not valida_cedula(cedula):
        raise ValidationError("La cédula no es válida.")

def valida_cedula(pCedula):
    vnTotal = 0
    vcCedula = pCedula
    pLongCed = len(vcCedula)
    digito_mult = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]

    if pLongCed != 11:
        return False

    for vDig in range(11):
        vCalculo = int(vcCedula[vDig]) * digito_mult[vDig]
        if vCalculo < 10:
            vnTotal += vCalculo
        else:
            vnTotal += int(str(vCalculo)[0]) + int(str(vCalculo)[1])

    return vnTotal % 10 == 0