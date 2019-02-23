function serviceProviderForm(gtm = false, redirect = false) {

  console.log('load service provider form')

  hbspt.forms.create({
    portalId: "4703451",
    formId: "f4ebffea-b69f-4571-acbd-b10562a2a731",
    target: '#contactForm',
    goToWebinarWebinarKey: gtm,
    cssClass: '',
    onFormReady: function ($form) {
      // what_are_you_interested_in_doing_with_polymath_
      if (gtm != false) { $("input:checkbox[name='ProductCode']").val(gtm).change(); }
      $('#what_are_you_interested_in_doing_with_polymath_-70514cfb-bbeb-455e-9592-192a4ba89699').val('Becoming a Service Provider').change();
    },
    onFormSubmit: function ($form) {
      if (redirect == 'create token') {
        ga('send', 'event', 'Form Submit', 'Create Security Token ', '');
        $("input[name='lead_detail']").val('Create Security Token Form').change();
        var email = $("#email-bf4e57b7-b0b6-4326-9197-a25b13ad18fb").val();
        window.location = "https://tokenstudio.polymath.network/ticker";
      } else {
        window.location = "https://polymath.network/thank-you.html";
      }
    }
  });
}

function investorForm(gtm = false, redirect = false) {
  hbspt.forms.create({
    portalId: "4703451",
    formId: "e1ff0ac0-b8d1-4dde-9921-157205014849",
    target: '#contactForm',
    goToWebinarWebinarKey: gtm,
    cssClass: '',
    onFormReady: function ($form) {
      if (gtm != false) { $("input:checkbox[name='ProductCode']").val(gtm).change(); }
      // what_are_you_interested_in_doing_with_polymath_
      $('#what_are_you_interested_in_doing_with_polymath_-70514cfb-bbeb-455e-9592-192a4ba89699').val('Investing in Security Tokens').change();
    },
    onFormSubmit: function ($form) {
      if (redirect == 'create token') {
        ga('send', 'event', 'Form Submit', 'Create Security Token ', '');
        $("input[name='lead_detail']").val('Create Security Token Form').change();
        var email = $("#email-bf4e57b7-b0b6-4326-9197-a25b13ad18fb").val();
        window.location = "https://tokenstudio.polymath.network/ticker";
      } else {
        window.location = "https://polymath.network/thank-you.html";
      }
    }
  });
}

function otherForm(gtm = false, redirect = false) {

  hbspt.forms.create({
    portalId: "4703451",
    formId: "6742ac7d-ec45-4380-b8ff-469cbafce6ce",
    target: '#contactForm',
    goToWebinarWebinarKey: gtm,
    cssClass: '',
    onFormReady: function ($form) {
      if (gtm != false) { $("input:checkbox[name='ProductCode']").val(gtm).change(); }
      $("input[name='lead_detail']").val('Create Security Token Form').change();
      // what_are_you_interested_in_doing_with_polymath_
      $('#what_are_you_interested_in_doing_with_polymath_-70514cfb-bbeb-455e-9592-192a4ba89699').val('Other').change();
    },
    onFormSubmit: function ($form) {
      if (redirect == 'create token') {
        ga('send', 'event', 'Form Submit', 'Create Security Token ', '');
        $("input[name='lead_detail']").val('Create Security Token Form').change();
        var email = $("#email-bf4e57b7-b0b6-4326-9197-a25b13ad18fb").val();
        window.location = "https://tokenstudio.polymath.network/ticker";
      } else {
        window.location = "https://polymath.network/thank-you.html";
      }
    }
  });
}

function createTokenForm(gtm = false, redirect = false) {

  hbspt.forms.create({
    portalId: "4703451",
    formId: "70504cfb-bbeb-455e-9592-192a4ba89699",
    target: '#contactForm',
    goToWebinarWebinarKey: gtm,
    cssClass: '',

    onFormReady: function ($form) {
      if (gtm != false) { $("input:checkbox[name='ProductCode']").val(gtm).change(); }
      var fields_to_hide = $(".hs_what_asset_are_you_looking_to_tokenize_, .hs_about_the_offering, .hs_about_the_team, .hs_do_you_have_a_lawyer, .hs_which_jurisdictions_will_you_be_marketing_your_offering_, .hs_how_much_capital_are_you_aiming_to_raise, .hs_do_you_have_investors_or_are_you_looking_for_help_bringing_investors_to_you");

      fields_to_hide.hide()
      $("#in_what_jurisdictions_are_you_incorporated-70504cfb-bbeb-455e-9592-192a4ba89699").change(function () {
        var option = $(this).val();
        //console.log($(this).val());
        if (option != "Not Incorporated") {
          //alert($(this).val())
          fields_to_hide.show()
        } else {
          fields_to_hide.hide()
        }

        $('#what_are_you_interested_in_doing_with_polymath_-70514cfb-bbeb-455e-9592-192a4ba89699').val('Create a Security Token').change();

      });

      $("#do_you_have_a_lawyer0-70504cfb-bbeb-455e-9592-192a4ba89699").change(function () {
        var option = $(this).val();

        //console.log($(this).val());
        if (option != "Not Incorporated") {
          //alert($(this).val())
          $(".hs_do_you_have_a_lawyer").show()
        }
        //https://polymath.zendesk.com/hc/en-us/requests/new
      });

    },
    onFormSubmit: function ($form) {

      if (redirect == 'create token') {
        ga('send', 'event', 'Form Submit', 'Create Security Token ', '');
        $("input[name='lead_detail']").val('Create Security Token Form').change();
        var email = $("#email-bf4e57b7-b0b6-4326-9197-a25b13ad18fb").val();
        window.location = "https://tokenstudio.polymath.network/ticker";
      } else {
        window.location = "https://polymath.network/thank-you.html";
      }

    }

  });

}
