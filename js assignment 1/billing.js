function billingFunction()
{
    var as=document.getElementById('shippingName').value;
    var az=document.getElementById('shippingZip').value;
    document.getElementById('billingZip').value=az;
    document.getElementById('billingName').value=as;
}
