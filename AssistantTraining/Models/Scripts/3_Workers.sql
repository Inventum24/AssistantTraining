﻿/****** Script for SelectTopNRows command from SSMS  ******/
-- (select Number from [dbo].[TrainingNames] where ID = TrainingNameId)
SELECT *
FROM [dbo].[TrainingGroups] tgg
inner join TrainingNames tnn on tgg.[TrainingNameId] = tnn.ID
inner join 
(
  select worker_inst.WorkerID as WorkerIDD ,   worker_inst.InstructionID as InstructionIDD  from [dbo].[Trainings] train
  right join 
  (
  select w.ID as WorkerID,ig.ID as InstructionID from [dbo].[InstructionGroups] ig
  inner join [dbo].[GroupWorkers] gw on ig.GroupId = gw.GroupId
  inner join [dbo].[Workers] w on gw.WorkerId = w.ID 
  inner join 
  (
    select max_ins.ID,max_ins.Number from
    (
	   select i.ID,i.Version,i.Number from dbo.Instructions i
	   inner join 
	   (
		  select MAX(Version) as Ver,Number from dbo.Instructions
		  group by Number 
	   ) ig on i.[Version] = ig.Ver and i.Number = ig.Number
    ) max_ins 
    left join dbo.TrainingGroups tg
    on tg.InstructionId = max_ins.ID
    where tg.InstructionId IS NOT NULL
  ) new_inst on new_inst.ID = ig.InstructionId 
  ) worker_inst on worker_inst.WorkerID = train.WorkerId AND train.InstructionId = worker_inst.InstructionID and TrainingNameId is null
  --where TrainingNameId is null
 ) in_worker on in_worker.InstructionIDD = tgg.InstructionId
 ---
 ---
 /****** Script for SelectTopNRows command from SSMS  ******/
-- (select Number from [dbo].[TrainingNames] where ID = TrainingNameId)
SELECT instr.[Number],instr.[Version],WorkerIDD,[LastName],[FirstMidName]
FROM [dbo].[Instructions] instr
inner join 
(
  select worker_inst.WorkerID as WorkerIDD , worker_inst.[FirstMidName], worker_inst.[LastName],   worker_inst.InstructionID as InstructionIDD  from [dbo].[Trainings] train
  right join 
  (
  select w.[FirstMidName], w.[LastName], w.ID as WorkerID,ig.ID as InstructionID from [dbo].[InstructionGroups] ig
  inner join [dbo].[GroupWorkers] gw on ig.GroupId = gw.GroupId
  inner join [dbo].[Workers] w on gw.WorkerId = w.ID 
  inner join 
  (
    select max_ins.ID,max_ins.Number from
    (
	   select i.ID,i.Version,i.Number from dbo.Instructions i
	   inner join 
	   (
		  select MAX(Version) as Ver,Number from dbo.Instructions
		  group by Number 
	   ) ig on i.[Version] = ig.Ver and i.Number = ig.Number
    ) max_ins 
    left join dbo.TrainingGroups tg
    on tg.InstructionId = max_ins.ID
    where tg.InstructionId IS NOT NULL
  ) new_inst on new_inst.ID = ig.InstructionId 
  ) worker_inst on worker_inst.WorkerID = train.WorkerId AND train.InstructionId = worker_inst.InstructionID and TrainingNameId is null
  --where TrainingNameId is null
 ) in_worker on in_worker.InstructionIDD = instr.ID
 
 