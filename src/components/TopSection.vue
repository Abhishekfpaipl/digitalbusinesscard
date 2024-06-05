<template>
  <div class="">
    <div class="border rounded-5 mt-2 mx-2">

      <div class="position-relative">
        <div class="d-flex justify-content-between align-items-center px-3 bg-light rounded-top-5">
          <span @click="saveContact">
            <small class="me-2">Save</small>
            <i class="bi bi-download fs-4"></i>
          </span>
          <span @click="share">
            <i class="bi bi-share fs-4"></i>
            <small class="ms-2">Share</small>
          </span>
        </div>
        <div class="rounded-circle position-absolute shadow end-50" style="width:60px;height: 60px;top: -60px;">
          <img src="https://cdn.bhybrid.org/imgcdn/20230708200505/card/p1109photo.jpg" alt="Logo" class="rounded-circle"
            style="width: 100px;">
        </div>
      </div>

      <div class="d-flex flex-column align-items-center my-2">
        <h3>Business Name</h3>
        <small class="">Sales assistant</small>
        <small class="">B2B service</small>
        <small class="">Bhybrid by Onhoff</small>
      </div>

      <div class="mt-4">
        <div class="container my-2">
          <div class="row justify-content-center">
            <div v-for="(icon, index) in contact" :key="index" class="col-4 d-flex flex-column align-items-center my-2"
              @click="handleIconClick(icon.action)">
              <div class="d-flex justify-content-center align-items-center shadow rounded-3 bg-white"
                style="width: 40px; height: 40px;">
                <i class="bi" :class="icon.icon"></i>
              </div>
              <p class="mt-2" style="font-size: 12px;">{{ icon.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasQuery" aria-labelledby="offcanvasQueryLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasQueryLabel">Query</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <form @submit.prevent="submitQuery()" class="row g-3 needs-validation" novalidate>
          <div class="w-100 p-2 form-floating">
            <input type="text" class="form-control" placeholder="Mobile" v-model="name" required>
            <label for="floatingInput" class="text-muted">First name</label>
          </div>
          <div class="w-100 p-2 form-floating">
            <input type="text" class="form-control" placeholder="Mobile" v-model="email" required>
            <label class="text-muted">Email Or Mobile No.</label>
          </div>
          <div class="form-floating">
            <textarea v-model="query" rows="2" class="form-control flex-fill" placeholder="Type your message..."
              required>
          </textarea>
            <label class="text-muted">Enter Your Query</label>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit Query</button>
          </div>
        </form>
      </div>
    </div>
 
  </div>
</template>

<script>
export default {
  name: "TopSection",
  data() {
    return {
      contact: [
        { name: 'Email', icon: 'bi-envelope fs-5', action: 'openEmail' },
        { name: 'Call', icon: 'bi-telephone fs-5', action: 'openDialer' },
        // { name: 'Message', icon: 'bi-chat fs-5', action: 'openSMS' },
        // { name: 'Save', icon: 'bi-download fs-5', action: 'downloadData' },
        { name: 'Business', icon: 'bi-building fs-5', action: '' },
        { name: 'Whatsapp', icon: 'bi-whatsapp fs-5', action: 'openWhatsapp' },
        { name: 'Map', icon: 'bi-geo fs-5', action: 'openMaps' },
        { name: 'Query', icon: 'bi-question-circle fs-5', action: 'openQuery' },
      ],
      name: '',
      email: '',
      query: '',
    }
  },
  methods: {
    handleIconClick(action) {
      const phoneNumber = '+918826658501';
      const emailAddress = 'abhisheknegi042@gmail.com';
      const location = '2nd Floor, Block B1/632, Janakpuri, Delhi, 110058';
      const offcanvasQuery = new window.bootstrap.Offcanvas(document.getElementById('offcanvasQuery'));
      // let blob, url, a;

      // const vcardContent = `BEGIN:VCARD
      // VERSION:3.0
      // N:;${phoneNumber};;;
      // FN:${phoneNumber}
      // TEL;TYPE=CELL:${phoneNumber}
      // END:VCARD`;

      switch (action) {
        case 'openEmail':
          window.location.href = `mailto:${emailAddress}`;
          break;
        case 'openDialer':
          window.location.href = `tel:${phoneNumber}`;
          break;
        // case 'openSMS':
        //   window.location.href = `sms:${phoneNumber}`;
        //   break;
        // case 'downloadData':
        //   blob = new Blob([vcardContent], { type: 'text/vcard' });
        //   url = window.URL.createObjectURL(blob);
        //   a = document.createElement('a');
        //   a.href = url;
        //   a.download = `contact.vcf`;
        //   a.click();
        //   window.URL.revokeObjectURL(url);
        //   break;
        case 'openWhatsapp':
          window.open(`https://wa.me/${phoneNumber}?text=Hello...`, '_blank');
          break;
        case 'openMaps':
          window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
          break;
        case 'openQuery':
          offcanvasQuery.show();
          break;
        default:
          break;
      }
    },
    saveContact() {
      const contactNumber = '+918826658501';
      const contactName = 'Contact Name'; // Add the contact name here

      // Generate VCF content
      const vcfContent = `BEGIN:VCARD
VERSION:3.0
FN:${contactName}
TEL:${contactNumber}
END:VCARD`;

      // Create a blob from the VCF content
      const blob = new Blob([vcfContent], { type: 'text/vcard' });

      // Create a link element
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'contact.vcf';

      // Trigger the download
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
    },
    submitQuery() {
      console.log('Submit Query')
      const data = {
        name: this.name,
        email: this.email,
        query: this.query,
      }
      this.$store.dispatch('submitQuery', data)
    },
    share() {
      if (navigator.share) {
        navigator.share({
          title: 'Share this content',
          text: 'Check out this awesome content!',
          url: window.location.href,
        }).then(() => {
          console.log('Successful share');
        }).catch((error) => {
          console.log('Error sharing', error);
        });
      } else {
        alert('Web Share API is not supported in your browser.');
      }
    },
  }
};
</script>
