NMR.product = {
  init: function(){


    var self = this;
    this.row_template = Handlebars.compile($("#product-row-template").html());
    this.product_rows = $("#product-rows");

    this.product_form = $("#new_product");

    this.product_form.bind("ajax:success", function(evt, data, status, xhr){
      self.product_rows.append(self.row_template({products:[data]}));
    });

    this.fetchProducts().done(function(result){
      self.product_rows.html(self.row_template(result));
    });
  },

  fetchProducts: function() {
    return $.ajax({
      url: "/products",
      dataType: "json"
    });
  }
}
