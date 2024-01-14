<template lang="pug">
section.Policy
    .Policy-title Privacy Policy
    .Policy__container
        .Policy__content
            p.
                This Privacy Policy for Gold Rush has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read  Privacy Policy  Gold Rush carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information.
                What personal information do we collect from the people that visit Gold Rush?
                When ordering or registering on our app, as appropriate, you may be asked to enter your phone number or other details to help you with your experience.
                When do we collect information?
                We collect information from you when you are installing the application.
                Data you provide us.
            p.
                Contact information (such as name and email address)
                Player name
                Your messages to the Service (such as chat logs and player support tickets)
                Other data you choose to give us (such as data to identify a lost account)

            p.
                Data we collect automatically.
            p.
                Data about your account and game progress
                Your IP address and mobile device identifiers (such as your device ID, advertising ID, MAC address, IMEI)
                Data about your device, such as device name and operating system, browser type and language
                Data we collect with cookie and similar technology (see more below)
                General location data
                Precise geolocation data (GPS, with your consent)
                Data about your use of the Service, such as gameplay data and your interactions with other players inside the Service
                In most cases, we also create a specific ID for you when you use the Service
            p.
                How do we use your information?
                We may use the information we collect from you when you register, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways: to quickly process your requests.
                How do we protect your information?
                We do not use vulnerability scanning and/or scanning to PCI standards. We only provide articles and information. Not only that, but we never ask for credit card numbers. Likewise, we do not use Malware Scanning. We do not use an SSL certificate. Furthermore, we do not need an SSL because: it is android application
                Do we use 'cookies'?
                Like most online services, our partners, and we use cookie and similar technology to provide and personalize the Service, analyze use, target advertisements and prevent fraud. 
                You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since the browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.
                If you turn cookies off, Some of the features that make your site experience more efficient may not function properly. That make your site experience more efficient and may not function properly.
                Third-party disclosure
                We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.
                Google
                Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en
                We have not enabled Google AdSense on our app, but we may do so in the future.
                How does our site handle Do Not Track signals?
                We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.
                Fair Information Practices
                The Fair Information Practices Principles form the backbone of privacy law in the United States, and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.

        .Policy__btns        
            button.Policy__btn  
                p accept
           
</template>

<script>
export default {

}
</script>

<style lang="scss">
.Policy{
    background: url('../assets/img/background.jpg') ;
    background-size: contain;
    background-repeat: repeat-y;
    // width: 800px;
    height: $height;
    padding: 20px;
    overflow: hidden;

    &-title{
        background:  linear-gradient(to bottom ,#EBFF00 , #FFA800  );
        -webkit-background-clip: text;
        font-size: 36px;
        -webkit-text-fill-color: transparent;
        margin-bottom: 8px;
        letter-spacing: 1.7px;
    }
    &__container{
        display: flex;
        align-items: start;
        // position: relative;
        height: auto;
        padding-bottom: 70px;
       
    }
    &__content{
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.8px;
        overflow-y: scroll;
        height: calc($height - 20px);
        max-width: 580px;
        p{
            margin-bottom: 20px;
        }
        &::-webkit-scrollbar {
         width: 0;
        }
    }
    &__btn{
        padding: 20px 40px;
        border: 2px solid  #00A3FF;
        border-radius: 15px;
        box-shadow: inset 0 0 40px #ffffff2f;
        background: linear-gradient(to bottom, #BD00FF,#005484);
        text-transform: uppercase;
        font-size: 24px;
        position: fixed;
        bottom: 30px;
        letter-spacing: 5%;
        outline: none;
      
        
         p {
            z-index: 2;
                -webkit-text-stroke: 1.7px #2C68C3;
                
                background: linear-gradient(to bottom, #fff,#1DC9FF);
                -webkit-text-fill-color: transparent;
                -webkit-background-clip: text; 
                // border-radius: 30px;
            
                
            // 
        }
    }
    &__btns {
        width: 200px;
       height: 300px;
        display: flex;
        position: relative;
        flex-direction: column; 
        align-items: end;
    }
}
</style>