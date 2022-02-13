CREATE TABLE IF NOT EXISTS `Person` (
  `mem_idx` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'User index in db',
  `mem_userid` VARCHAR(100) NOT NULL COMMENT 'User\'s ID',
  `mem_email` VARCHAR(100) NOT NULL COMMENT 'User\'s email',
  `mem_password` VARCHAR(128) NOT NULL COMMENT 'User\'s password',
  `holiday_left` DECIMAL(4,2) UNSIGNED NOT NULL DEFAULT 15 COMMENT 'User\'s left_holiday',
  `holiday_used` DECIMAL(4,2) UNSIGNED NOT NULL DEFAULT 0 COMMENT 'User\'s used_holiday',
  PRIMARY KEY (`mem_idx`),
  UNIQUE INDEX `mem_userid_UNIQUE` (`mem_userid` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
COMMENT = 'User_table';

CREATE TABLE IF NOT EXISTS `Holiday` (
  `h_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `start` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `end` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` tinyint(1) NOT NULL,
  PRIMARY KEY (`h_id`),
  UNIQUE KEY `idholiday_day_UNIQUE` (`h_id`),
  CONSTRAINT `h_id` FOREIGN KEY (`h_id`) REFERENCES `Person` (`mem_idx`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO Person(`mem_userid`, `mem_email`, `mem_password`) VALUE ('jungbumwoo', 'jungbum@naver.com', PASSWORD('jungbum'));
