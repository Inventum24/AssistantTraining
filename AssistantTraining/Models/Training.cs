﻿using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace AssistantTraining.Models
{
    public class Training
    {
        public int ID { get; set; }

        public int InstructionId { get; set; }
        public virtual Instruction Instruction { get; set; }

        public int WorkerId { get; set; }
        public virtual Worker Worker { get; set; }

        [ScaffoldColumn(true)]
        [DisplayName("Czas utworzenia")]
        public DateTime TimeOfCreation { get; set; }
        [ScaffoldColumn(true)]
        [DisplayName("Czas modyfikacji")]
        public DateTime TimeOfModification { get; set; }

        [DataType(DataType.Date)]
        [Display(Name = "Date of Training")]
        public DateTime DateOfTraining { get; set; }
    }
}