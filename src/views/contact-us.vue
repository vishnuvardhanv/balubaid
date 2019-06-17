<template>
  <div class="container">
            <b-form-group method="post">
                <h2 class="pt-3 pb-3">Contact Us</h2>
               <div class="row  pt-5 pb-5 mt-5 mb-5">
                    
                    <div class="col-md-6">
                        <div class="form-group">
                            <b-form-textarea name="txtMsg" class="form-control" placeholder="Your Message *" style="width: 100%; height: 150px;"></b-form-textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <b-form-input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group">
                            <b-form-input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <b-form-input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div class="form-group pt-5 pb-5">
                          <b-button variant="outline-primary">Send Message</b-button>
                        </div>
                    </div>
                    
                </div>
            </b-form-group>
</div>
</template>

<style lang="scss">
.contact-form .form-control{
    border-radius:1rem;
}
.contact-image{
    text-align: center;
}
.contact-image img{
    border-radius: 6rem;
    width: 11%;
    margin-top: -3%;
    transform: rotate(29deg);
}
.contact-form form{
    padding: 14%;
}
.contact-form form .row{
    margin-bottom: -7%;
}
.contact-form h3{
    margin-bottom: 8%;
    margin-top: -10%;
    text-align: center;
    color: #0062cc;
}
.contact-form .btnContact {
    width: 50%;
    border: none;
    border-radius: 1rem;
    padding: 1.5%;
    background: #dc3545;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
}
.btnContactSubmit
{
    width: 50%;
    border-radius: 1rem;
    padding: 1.5%;
    color: #fff;
    background-color: #0062cc;
    border: none;
    cursor: pointer;
}
</style>

