#
# TABLE STRUCTURE FOR: comments
#

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `donor_id` int(9) unsigned NOT NULL,
  `comment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# TABLE STRUCTURE FOR: donation
#

CREATE TABLE `donations` (
  `id` int(11) NOT NULL,
  `donor_id` int(9) unsigned NOT NULL,
  `frequency_of_donation` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `currency` varchar(255) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# TABLE STRUCTURE FOR: donor
#

CREATE TABLE `donors` (
  `id` int(9) unsigned NOT NULL AUTO_INCREMENT,
  `last_name` varchar(100) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `street_address` varchar(255) NOT NULL,
  `city` char(10) NOT NULL,
  `state` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `poastal_code` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `preferred_payment` varchar(255) NOT NULL,
  `preferred_form_contact` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;