﻿using AssistantTraining.App_GlobalResources;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AssistantTraining.ViewModel
{
    public class UserCreateData
    {
        [DisplayName("Nazwa")]
        [Required(ErrorMessageResourceType = typeof(Resources),ErrorMessageResourceName = "RequiredFiled")]
        public string Name { get; set; }

        [DisplayName("E-mail")]
        [Required(ErrorMessageResourceType = typeof(Resources), ErrorMessageResourceName = "RequiredFiled")]
        [RegularExpression(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$", ErrorMessageResourceType = typeof(Resources), ErrorMessageResourceName = "EmailFormat")]
        public string Email { get; set; }

        [Display(Name = "Password", ResourceType = typeof(Resources))]
        [DataType(DataType.Password)]
        //[Required(ErrorMessageResourceType = typeof(Resources), ErrorMessageResourceName = "RequiredFiled")]
        [RegularExpression(@"^$|^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$", ErrorMessageResourceType = typeof(Resources), ErrorMessageResourceName = "MinLenghtFiled")]
        public string Password { get; set; }
        [Required]
        public string SelectedId { get; set; }

        [DisplayName("Role")]
        public IEnumerable<SelectListItem> Items { get; set; }
    }
}