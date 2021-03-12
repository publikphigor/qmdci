const courseReg = document.querySelector('.r-cont-1');
const coursePay = document.querySelector('.r-cont-2');
const coursePaySuccess = document.querySelector('.r-cont-3');
const proceedBtn = document.querySelector('.r-next');
const payBtn = document.querySelector('.r-pay');
const paymentForm = document.getElementById('Course-Form');
paymentForm.addEventListener("submit", payWithPaystack, false);

proceedBtn.onclick = () => {
    $('#nameof').html($('#name').val() + ' ' + $('#last').val());
    $('#emailof').html($('#Email').val());
    $('#phoneof').html($('#phone').val());
    $('#courseof').html($('#course').val());
    courseReg.classList.add('d-none');
    coursePay.classList.remove('d-none');
};

payBtn.onclick = () => {
    $('.r-pay').attr('disabled', true);
    payWithPaystack();
};

$('document').ready(function () {

    $('#myfile').on('click', function () {
        $('#file').click();
    })

})

function payWithPaystack() {
    let handler = PaystackPop.setup({
        key: 'pk_test_4e097f3cce26b7de48a7de8d537f49d1989974bf',
        email: document.getElementById("Email").value,
        amount: 5000 * 100,
        onClose: function () {
            $('#end-text').html('Payment Error. <br>Payment Was Cancelled.');
            courseReg.classList.add('d-none');
            coursePay.classList.add('d-none');
            coursePaySuccess.classList.remove('d-none');
        },
        callback: function (response) {
            console.log(response);
            if (response.status == 'success') {
                var form = $('#Course-Form')[0];
                var formData = new FormData(form);
                $.ajax({
                    url: './php/course.php?ref=' + response.reference,
                    data: formData,
                    contentType: false,
                    cache: false,
                    processData: false,
                    method: 'POST',
                    success: function (data) {
                        console.log(data);
                        data = JSON.parse(data);
                        if (data.status == 1) {
                            $('#end-text').html('Congratulations. <br>Payment Succesful !!!');
                            courseReg.classList.add('d-none');
                            coursePay.classList.add('d-none');
                            coursePaySuccess.classList.remove('d-none');
                        } else {
                            $('#end-text').html('Payment Error. <br>There Was An Error Confirming Your Payment <br> Transaction Reference : ' + response.reference + ' !!!');
                            courseReg.classList.add('d-none');
                            coursePay.classList.add('d-none');
                            coursePaySuccess.classList.remove('d-none');
                        }
                    }
                })
            }
        }
    });
    handler.openIframe();

    return false;
}
