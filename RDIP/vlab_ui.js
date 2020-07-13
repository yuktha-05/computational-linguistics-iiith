function mydropdown($this)
{
    if($this.value=="Select Language")
    {
        alert("Select Language");

    }

}


$(document).ready(function() {
    $('select[name="configoption[56]"]').change(function() {
        var value = $(this).val();
        $('.message').toggle(value == 'english' || value == 'hindi');
    });
});