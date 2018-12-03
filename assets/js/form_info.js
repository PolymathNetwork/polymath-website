function serviceProviderForm(gtm = false) {

  //f4ebffea-b69f-4571-acbd-b10562a2a731
  hbspt.forms.create({
    portalId: "4703451",
    formId: "f4ebffea-b69f-4571-acbd-b10562a2a731",
    target: '#contactForm',
    goToWebinarWebinarKey : gtm,
    cssClass: ''
    });

}

function investorForm(gtm = false) {
  hbspt.forms.create({
    portalId: "4703451",
    formId: "f4ebffea-b69f-4571-acbd-b10562a2a731",
    target: '#contactForm',
    goToWebinarWebinarKey : gtm,
    cssClass: ''
    });
}

function createTokenForm(gtm = false) {

  hbspt.forms.create({
    portalId: "4703451",
    formId: "70504cfb-bbeb-455e-9592-192a4ba89699",
    target: '#contactForm',
    goToWebinarWebinarKey : gtm,
    cssClass: '',

    onFormReady: function($form) {

      var fields_to_hide  = $(".hs_what_asset_are_you_looking_to_tokenize_, .hs_about_the_offering, .hs_about_the_team, .hs_do_you_have_a_lawyer, .hs_which_jurisdictions_will_you_be_marketing_your_offering_, .hs_how_much_capital_are_you_aiming_to_raise, .hs_do_you_have_investors_or_are_you_looking_for_help_bringing_investors_to_you");

      fields_to_hide.hide()
      $("#in_what_jurisdictions_are_you_incorporated-70504cfb-bbeb-455e-9592-192a4ba89699").change(function() {
        var option = $(this).val();
        //console.log($(this).val());
        if (option != "Not Incorporated") {
          //alert($(this).val())
          fields_to_hide.show()
        } else {
          fields_to_hide.hide()
        }

        // what_are_you_interested_in_doing_with_polymath_
        $('#what_are_you_interested_in_doing_with_polymath_-70514cfb-bbeb-455e-9592-192a4ba89699').val(option).change();
        $('#lead_source-70504cfb-bbeb-455e-9592-192a4ba89699').val('Create a Security Token Form').change();

        // https://polymath.zendesk.com/hc/en-us/requests/new
      });

      $("#do_you_have_a_lawyer0-70504cfb-bbeb-455e-9592-192a4ba89699").change(function() {
        var option = $(this).val();

        //console.log($(this).val());
        if (option != "Not Incorporated") {
          //alert($(this).val())
          $(".hs_do_you_have_a_lawyer").show()
        }
        // https://polymath.zendesk.com/hc/en-us/requests/new
      });

    }

  });

}
