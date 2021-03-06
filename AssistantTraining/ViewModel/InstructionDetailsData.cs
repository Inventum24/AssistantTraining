﻿using AssistantTraining.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AssistantTraining.ViewModel
{
    //lista grup do których należy dana instrukcja
    //lista pracowników przeszkolonych i do przeszkolenia (można umieścić na jednej liście z możliwością filtrowania)
    public class InstructionDetailsData
    {
        public int ID { get; set; }

        [DisplayName("Nazwa")]
        public string Name { get; set; }

        [DisplayName("Numer")]
        public string Number { get; set; }

        [DisplayName("Wersja")]
        public string Version { get; set; }

        [DisplayName("Grupy")]
        public virtual ICollection<Group> Groups { get; set; }

        public virtual ICollection<Training> Trainings { get; set; }

        public List<InstructionVsTrainingData> instructionVsTrainingList { get; set; }


        [DisplayName("Grupy")]
        public IEnumerable<SelectListItem> Items { get; set; }

    }
}