﻿using AssistantTraining.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AssistantTraining.ViewModel
{
    public class WorkerGroupViewModel
    {
        public int ID { get; set; }

        [Required(ErrorMessage = "required")]
        [DisplayName("Imię")]
        public string FirstMidName { get; set; }


        [Required(ErrorMessage = "required")]
        [DisplayName("Nazwisko")]
        public string LastName { get; set; }

        public string Tag { get; set; }

        [DisplayName("Grupy")]
        public virtual ICollection<Group> WorkerGroups { get; set; }

        public string[] SelectedIds { get; set; }

        [DisplayName("Grupy")]
        public IEnumerable<SelectListItem> Items { get; set; }
    }
}