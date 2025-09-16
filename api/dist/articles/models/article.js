"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var articleSchema = new Schema({
  header: {
    type: String,
    required: true
  },
  subheader: {
    type: String
  },
  date: {
    type: Date,
    "default": Date.now
  },
  content: {
    type: Array,
    required: true
  },
  type: {
    type: String,
    "enum": ['announcement', 'news', 'blogpost', 'projects', 'launchprogram'],
    required: true
  },
  hidden: {
    type: Boolean,
    "default": false
  },
  // Fields for launch programs only
  launchdate: {
    type: String,
    "default": ""
  },
  conclusiondate: {
    type: String,
    "default": ""
  },
  airdropdate: {
    type: String,
    "default": ""
  },
  totalairdrops: {
    type: String,
    "default": ""
  },
  status: {
    type: String,
    "enum": ['Completed', 'Ongoing', 'Whitelisted'],
    validate: {
      validator: function validator(v) {
        return this.type === 'launchprogram' ? !!v : !v;
      },
      message: "Status is only valid for 'launchprogram' type."
    }
  },
  network_logo: {
    type: String
  }
});
articleSchema.pre('validate', function (next) {
  console.log(this.type); // This will run before validation
  if (this.type !== 'launchprogram') {
    // Remove fields specific to 'launchprogram'
    this.launchdate = undefined;
    this.conclusiondate = undefined;
    this.airdropdate = undefined;
    this.totalairdrops = undefined;
    this.status = undefined;
    this.network_logo = undefined;
  }
  next();
});
articleSchema.pre('save', function (next) {
  console.log("Pre-save middleware running for type:", this.type);
  next();
});
var Article = mongoose.model('Article', articleSchema);
module.exports = Article;

/*@click="
              $router.push({
                path: '/articles/projects',
                query: { type: 'projects' },
              })
            "*/

/*
        {
          logo: "bnb-bnb-logo.png",
          name: "VintageCoin Launch",
          status: "Completed",
          launchDate: "November 10, 2024",
          conclusionDate: "December 15, 2024",
          airdropDate: "January 5, 2024",
          totalAirdrops: "$ 150,000",
        },
        {
          logo: "ethereum-eth-logo.png",
          name: "RetroToken Launch",
          status: "Completed",
          launchDate: "March 15, 2024",
          conclusionDate: "April 20, 2024",
          airdropDate: "May 1, 2024",
          totalAirdrops: "$ 200,000",
        },
        {
          logo: "ethereum-eth-logo.png",
          name: "LegacyCoin Launch",
          status: "Completed",
          launchDate: "July 25, 2024",
          conclusionDate: "August 30, 2024",
          airdropDate: "September 10, 2024",
          totalAirdrops: "$ 500,000",
        },
        {
          logo: "solana-sol-logo.png",
          name: "MoonPaw Launch",
          status: "Upcoming",
          launchDate: "January 10, 2025",
          conclusionDate: "February 15, 2025",
          airdropDate: "March 1, 2025",
          totalAirdrops: "$ 300,000",
        },
        {
          logo: "xrp-xrp-logo.png",
          name: "ShibaNova Launch",
          status: "Upcoming",
          launchDate: "March 20, 2025",
          conclusionDate: "April 25, 2025",
          airdropDate: "May 5, 2025",
          totalAirdrops: "$ 500,000",
        },
        {
          logo: "ethereum-eth-logo.png",
          name: "DogeRocket Launch",
          status: "Upcoming",
          launchDate: "May 15, 2025",
          conclusionDate: "June 30, 2025",
          airdropDate: "July 10, 2025",
          totalAirdrops: "$ 750,000",
        },
        {
          logo: "polkadot-new-dot-logo.png",
          name: "FrogoCoin Launch",
          status: "Upcoming",
          launchDate: "July 20, 2025",
          conclusionDate: "August 25, 2025",
          airdropDate: "September 1, 2025",
          totalAirdrops: "$ 1,000,000",
        },
        {
          logo: "xrp-xrp-logo.png",
          name: "PepeBlast Launch",
          status: "Upcoming",
          launchDate: "September 15, 2025",
          conclusionDate: "October 20, 2025",
          airdropDate: "November 1, 2025",
          totalAirdrops: "$ 2,000,000",
        },
      */