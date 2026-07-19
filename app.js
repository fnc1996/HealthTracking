'use strict';

/* =========================================================
   TRANSLATIONS
   ========================================================= */
const translations = {
  en: {
    'app.title': 'Evolve — Training & Diet Tracker',
    'theme.toggle': 'Toggle theme',
    'nav.dashboard': 'Dashboard', 'nav.body': 'Body', 'nav.workouts': 'Workouts', 'nav.diet': 'Diet',
    'nav.photos': 'Photos', 'nav.summary': 'Summary', 'nav.supplements': 'Supplements', 'nav.settings': 'Settings',

    'common.date': 'Date', 'common.notesOptional': 'Notes (optional)', 'common.cancel': 'Cancel', 'common.save': 'Save',
    'common.done': 'Done', 'common.close': 'Close', 'common.delete': 'Delete', 'common.edit': 'Edit', 'common.view': 'View',
    'common.areYouSure': 'Are you sure?', 'common.saved': 'Saved',

    'dash.heading': 'Dashboard',
    'dash.statLatestWeight': 'Latest weight', 'dash.statWorkouts7d': 'Workouts (7d)', 'dash.statDietCost14d': 'Diet cost (14d)',
    'dash.statExercisesTracked': 'Exercises tracked', 'dash.statSupplementsToday': 'Supplements today',
    'dash.weightTrend': 'Weight trend', 'dash.dietCostChart': 'Diet cost (last 14 days)', 'dash.recentActivity': 'Recent activity',
    'dash.emptyRecent': 'Nothing logged yet. Start with Body, Workouts, or Diet.',
    'dash.emptyWeightChart': 'Log your first weight entry in the Body tab',
    'dash.emptyCostChart': 'Log meals with priced foods to see cost trends',
    'activity.bodyLogged': 'Body metrics logged', 'activity.workout': 'Workout: {name}', 'activity.mealLogged': 'Meal logged',
    'activity.photoAdded': 'Progress photo', 'activity.noteAdded': 'Note added', 'activity.supplementTaken': 'Took {name}',
    'activity.session': 'Session',

    'body.heading': 'Body metrics', 'body.logEntryBtn': '+ Log entry', 'body.weightEvolution': 'Weight evolution', 'body.history': 'History',
    'body.editTitle': 'Edit entry', 'body.logTitle': 'Log body metrics', 'body.weightLabel': 'Weight (kg)', 'body.weightPlaceholder': 'e.g. 78.5',
    'body.bodyFatLabel': 'Body fat % (optional)', 'body.bodyFatPlaceholder': 'e.g. 18',
    'body.notesPlaceholder': 'How are you feeling? Anything to remember?',
    'body.thDate': 'Date', 'body.thWeight': 'Weight', 'body.thBodyFat': 'Body fat %', 'body.thNotes': 'Notes',
    'body.emptyTable': 'No entries yet. Click "Log entry" to start.', 'body.emptyChart': 'No entries yet',
    'body.errInvalidWeight': 'Enter a valid weight', 'body.confirmDelete': 'Delete this body metrics entry?',
    'body.fatSuffix': '% fat',

    'workouts.heading': 'Workouts', 'workouts.manageExercisesBtn': 'Manage exercises', 'workouts.logWorkoutBtn': '+ Log workout',
    'workouts.progressByExercise': 'Progress by exercise', 'workouts.sessionHistory': 'Session history',
    'workouts.noExercisesOption': 'No exercises yet', 'workouts.emptyProgressChart': 'Add an exercise to see progress',
    'workouts.emptyExerciseSessions': 'No sessions logged for this exercise yet', 'workouts.emptyList': 'No workouts logged yet.',
    'workouts.manageTitle': 'Manage exercises / machines',
    'workouts.manageHint': 'Add the gym machines and exercises you use. Rename anytime — your history stays linked.',
    'workouts.emptyManager': 'No exercises yet', 'workouts.newExerciseLabel': 'New exercise / machine name',
    'workouts.newExercisePlaceholder': 'e.g. Leg press, Bench press, Lat pulldown', 'workouts.addBtn': '+ Add',
    'workouts.addExerciseFirstTitle': 'Add an exercise first',
    'workouts.addExerciseFirstHint': 'You need at least one exercise before logging a workout.',
    'workouts.editTitle': 'Edit workout', 'workouts.logTitle': 'Log workout', 'workouts.durationLabel': 'Duration (min, optional)',
    'workouts.emptySessionEntries': 'No exercises added to this session yet', 'workouts.addExerciseToSession': '+ Add exercise to session',
    'workouts.saveBtn': 'Save workout', 'workouts.setWeightPlaceholder': 'Weight (kg)', 'workouts.setRepsPlaceholder': 'Reps',
    'workouts.addSetBtn': '+ Add set', 'workouts.setsCount': '{n} sets', 'workouts.exercisesCount': '{n} exercise(s)',
    'workouts.errEnterName': 'Enter a name', 'workouts.errAddSet': 'Add at least one set', 'workouts.savedToast': 'Workout saved',
    'workouts.confirmDeleteSession': 'Delete this workout session?',
    'workouts.confirmDeleteExercise': 'Delete this exercise? Past workout entries referencing it will show as "(deleted exercise)".',
    'workouts.deletedExercise': '(deleted exercise)',

    'diet.heading': 'Diet', 'diet.manageFoodsBtn': 'Manage foods & prices', 'diet.logMealBtn': '+ Log meal',
    'diet.dailyCost': 'Daily cost', 'diet.dailyCalories': 'Daily calories', 'diet.mealHistory': 'Meal history',
    'diet.statAvgDaily30': 'Avg daily cost (30d)', 'diet.statTotalCost30': 'Total cost (30d)', 'diet.statCaloriesToday': 'Calories today',
    'diet.statFoodsTracked': 'Foods tracked', 'diet.emptyCostChart': 'Log meals with priced foods',
    'diet.emptyKcalChart': 'Add calories per 100g to your foods to see this', 'diet.defaultMealName': 'Meal',
    'diet.emptyList': 'No meals logged yet.', 'diet.manageFoodsTitle': 'Manage foods & prices',
    'diet.manageFoodsHint': "Set the price per kilo for each food once — it's reused automatically every time you log a meal with it. Calories and macros (g per 100g) are optional but carry over the same way.",
    'diet.emptyFoodsManager': 'No foods yet', 'diet.newFoodLabel': 'New food name',
    'diet.newFoodPlaceholder': 'e.g. Chicken breast, Rice, Olive oil', 'diet.addFoodBtn': '+ Add food',
    'diet.priceLabel': 'Price / kg ({c})', 'diet.kcalLabel': 'Kcal / 100g (optional)', 'diet.proteinLabel': 'Protein /100g',
    'diet.carbsLabel': 'Carbs /100g', 'diet.fatLabel': 'Fat /100g',
    'diet.addFoodFirstTitle': 'Add a food first',
    'diet.addFoodFirstHint': 'You need at least one food (with a price per kg) before logging a meal.',
    'diet.manageFoodsBtnShort': 'Manage foods', 'diet.editMealTitle': 'Edit meal', 'diet.logMealTitle': 'Log meal',
    'diet.mealNameLabel': 'Meal name (optional)', 'diet.mealNamePlaceholder': 'e.g. Lunch', 'diet.foodsLabel': 'Foods',
    'diet.emptyMealItems': 'No foods added yet', 'diet.gramsPlaceholder': 'grams',
    'diet.totalCost': 'Cost:', 'diet.totalCalories': 'Calories:', 'diet.totalProtein': 'Protein:', 'diet.totalCarbs': 'Carbs:',
    'diet.totalFat': 'Fat:', 'diet.saveMealBtn': 'Save meal', 'diet.pInitial': 'P', 'diet.cInitial': 'C', 'diet.fInitial': 'F',
    'diet.itemsCount': '{n} item(s)', 'diet.kcalUnit': 'kcal',
    'diet.errEnterFoodName': 'Enter a food name', 'diet.errAddFood': 'Add at least one food with a quantity',
    'diet.savedToast': 'Meal saved', 'diet.confirmDeleteMeal': 'Delete this meal entry?',
    'diet.confirmDeleteFood': "Delete this food? Past meals referencing it will lose its cost/calorie data.",

    'gallery.heading': 'Photos & notes', 'gallery.addEntryBtn': '+ Add entry',
    'gallery.emptyGrid': 'No photos or notes yet. Add your first progress entry.', 'gallery.altPhoto': 'Progress photo',
    'gallery.addTitle': 'Add progress entry', 'gallery.photoLabel': 'Photo (optional)', 'gallery.noteLabel': 'Note (optional)',
    'gallery.notePlaceholder': "How's it going?", 'gallery.progressPhoto': 'Progress photo', 'gallery.note': 'Note',
    'gallery.errAddPhotoOrNote': 'Add a photo or a note', 'gallery.errProcessImage': 'Could not process image',
    'gallery.confirmDelete': 'Delete this entry?',

    'summary.heading': 'Monthly summary', 'summary.prevMonth': 'Previous month', 'summary.nextMonth': 'Next month',
    'summary.statBodyEntries': 'Body entries', 'summary.statWeightChange': 'Weight change', 'summary.statWorkouts': 'Workouts',
    'summary.statMealsLogged': 'Meals logged', 'summary.statDietTotalCost': 'Diet total cost', 'summary.statAvgDailyCost': 'Avg daily cost',
    'summary.statTotalCalories': 'Total calories', 'summary.statPhotosNotes': 'Photos / notes', 'summary.statSupplementDoses': 'Doses taken',
    'summary.macrosTitle': 'Macros consumed this month', 'summary.bodyMetrics': 'Body metrics', 'summary.workouts': 'Workouts',
    'summary.meals': 'Meals', 'summary.gallery': 'Photos & notes', 'summary.supplements': 'Supplements & medication',
    'summary.emptyBody': 'No body metrics logged this month.', 'summary.emptyWorkouts': 'No workouts logged this month.',
    'summary.emptyMeals': 'No meals logged this month.', 'summary.emptyGallery': 'No photos or notes this month.',
    'summary.emptySupplements': 'No doses logged this month.',

    'supplements.heading': 'Supplements & medication', 'supplements.manageBtn': 'Manage supplements',
    'supplements.checklistTitle': "Today's checklist", 'supplements.adherenceTitle': 'Adherence (last 14 days)',
    'supplements.historyTitle': 'History',
    'supplements.emptyChecklist': 'No active supplements or medication yet. Add one to start tracking.',
    'supplements.emptyHistory': 'No doses logged yet.',
    'supplements.manageModalTitle': 'Manage supplements & medication',
    'supplements.manageHint': 'Add each supplement or medication once — set its dose and how often you take it, then check it off daily from the checklist.',
    'supplements.nameLabel': 'Name', 'supplements.namePlaceholder': 'e.g. Vitamin D, Creatine, Omeprazole',
    'supplements.typeLabel': 'Type', 'supplements.typeSupplement': 'Supplement', 'supplements.typeMedication': 'Medication',
    'supplements.doseLabel': 'Dose', 'supplements.dosePlaceholder': 'e.g. 5g, 500mg, 1 tablet',
    'supplements.frequencyLabel': 'Frequency', 'supplements.frequencyPlaceholder': 'e.g. Daily, 2x/day, Mon-Fri',
    'supplements.activeLabel': 'Active', 'supplements.addBtn': '+ Add', 'supplements.emptyManager': 'No supplements or medication yet.',
    'supplements.confirmDelete': 'Delete this supplement/medication? Its log history will be kept but it will disappear from the checklist.',
    'supplements.confirmDeleteLog': 'Remove this logged dose?', 'supplements.statTakenToday': 'Taken today',
    'supplements.emptyAdherenceChart': 'Log doses to see your adherence trend',
    'supplements.newBtn': '+ Add new', 'supplements.doseUnitless': '',

    'settings.heading': 'Settings & backup', 'settings.preferences': 'Preferences', 'settings.currency': 'Currency symbol',
    'settings.language': 'Language', 'settings.backupTitle': 'Backup your data',
    'settings.backupHint': 'Everything is stored only in this browser. Export a backup regularly, especially before clearing browser data or switching devices.',
    'settings.exportBtn': 'Export backup (.json)', 'settings.importBtn': 'Import backup', 'settings.storageTitle': 'Storage usage',
    'settings.dangerTitle': 'Danger zone', 'settings.dangerHint': 'This permanently deletes all data in this browser. Export a backup first.',
    'settings.eraseBtn': 'Erase all data', 'settings.storageUsage': '{size} used locally (roughly {pct}% of typical browser storage limits). Photos are the biggest contributor — export a backup if you add many.',
    'settings.toastBackupDownloaded': 'Backup downloaded', 'settings.toastInvalidBackup': 'Invalid backup file',
    'settings.toastBackupImported': 'Backup imported', 'settings.toastAllErased': 'All data erased',
    'settings.importTitle': 'Import backup',
    'settings.importWarning': 'Importing will <b>replace all current data</b> in this browser with the contents of the backup file. This cannot be undone unless you have another backup.',
    'settings.replaceData': 'Replace data',
    'settings.eraseWarning': 'This will permanently erase ALL data in this browser (body metrics, workouts, diet, supplements, photos). Export a backup first if you have not.',
    'toast.storageFull': 'Storage full — export a backup and clear old photos.',
  },
  pt: {
    'app.title': 'Evolve — Treino e Dieta',
    'theme.toggle': 'Mudar tema',
    'nav.dashboard': 'Painel', 'nav.body': 'Corpo', 'nav.workouts': 'Treinos', 'nav.diet': 'Dieta',
    'nav.photos': 'Fotos', 'nav.summary': 'Resumo', 'nav.supplements': 'Suplementos', 'nav.settings': 'Definições',

    'common.date': 'Data', 'common.notesOptional': 'Notas (opcional)', 'common.cancel': 'Cancelar', 'common.save': 'Guardar',
    'common.done': 'Concluído', 'common.close': 'Fechar', 'common.delete': 'Eliminar', 'common.edit': 'Editar', 'common.view': 'Ver',
    'common.areYouSure': 'Tens a certeza?', 'common.saved': 'Guardado',

    'dash.heading': 'Painel',
    'dash.statLatestWeight': 'Peso mais recente', 'dash.statWorkouts7d': 'Treinos (7d)', 'dash.statDietCost14d': 'Custo dieta (14d)',
    'dash.statExercisesTracked': 'Exercícios registados', 'dash.statSupplementsToday': 'Suplementos hoje',
    'dash.weightTrend': 'Evolução do peso', 'dash.dietCostChart': 'Custo da dieta (últimos 14 dias)', 'dash.recentActivity': 'Atividade recente',
    'dash.emptyRecent': 'Ainda nada registado. Começa por Corpo, Treinos ou Dieta.',
    'dash.emptyWeightChart': 'Regista o teu primeiro peso no separador Corpo',
    'dash.emptyCostChart': 'Regista refeições com alimentos com preço para ver a tendência de custo',
    'activity.bodyLogged': 'Métricas corporais registadas', 'activity.workout': 'Treino: {name}', 'activity.mealLogged': 'Refeição registada',
    'activity.photoAdded': 'Foto de progresso', 'activity.noteAdded': 'Nota adicionada', 'activity.supplementTaken': 'Tomou {name}',
    'activity.session': 'Sessão',

    'body.heading': 'Métricas corporais', 'body.logEntryBtn': '+ Novo registo', 'body.weightEvolution': 'Evolução do peso', 'body.history': 'Histórico',
    'body.editTitle': 'Editar registo', 'body.logTitle': 'Registar métricas corporais', 'body.weightLabel': 'Peso (kg)', 'body.weightPlaceholder': 'ex: 78.5',
    'body.bodyFatLabel': '% massa gorda (opcional)', 'body.bodyFatPlaceholder': 'ex: 18',
    'body.notesPlaceholder': 'Como te sentes? Algo a lembrar?',
    'body.thDate': 'Data', 'body.thWeight': 'Peso', 'body.thBodyFat': '% gordura', 'body.thNotes': 'Notas',
    'body.emptyTable': 'Ainda sem registos. Clica em "Novo registo" para começar.', 'body.emptyChart': 'Ainda sem registos',
    'body.errInvalidWeight': 'Introduz um peso válido', 'body.confirmDelete': 'Eliminar este registo de métricas corporais?',
    'body.fatSuffix': '% gordura',

    'workouts.heading': 'Treinos', 'workouts.manageExercisesBtn': 'Gerir exercícios', 'workouts.logWorkoutBtn': '+ Novo treino',
    'workouts.progressByExercise': 'Progresso por exercício', 'workouts.sessionHistory': 'Histórico de sessões',
    'workouts.noExercisesOption': 'Ainda sem exercícios', 'workouts.emptyProgressChart': 'Adiciona um exercício para ver o progresso',
    'workouts.emptyExerciseSessions': 'Ainda sem sessões registadas para este exercício', 'workouts.emptyList': 'Ainda sem treinos registados.',
    'workouts.manageTitle': 'Gerir exercícios / máquinas',
    'workouts.manageHint': 'Adiciona as máquinas e exercícios que usas no ginásio. Podes renomear a qualquer momento — o histórico mantém-se ligado.',
    'workouts.emptyManager': 'Ainda sem exercícios', 'workouts.newExerciseLabel': 'Nome do novo exercício / máquina',
    'workouts.newExercisePlaceholder': 'ex: Leg press, Supino, Puxador', 'workouts.addBtn': '+ Adicionar',
    'workouts.addExerciseFirstTitle': 'Adiciona primeiro um exercício',
    'workouts.addExerciseFirstHint': 'Precisas de pelo menos um exercício antes de registar um treino.',
    'workouts.editTitle': 'Editar treino', 'workouts.logTitle': 'Registar treino', 'workouts.durationLabel': 'Duração (min, opcional)',
    'workouts.emptySessionEntries': 'Ainda sem exercícios adicionados a esta sessão', 'workouts.addExerciseToSession': '+ Adicionar exercício à sessão',
    'workouts.saveBtn': 'Guardar treino', 'workouts.setWeightPlaceholder': 'Peso (kg)', 'workouts.setRepsPlaceholder': 'Reps',
    'workouts.addSetBtn': '+ Adicionar série', 'workouts.setsCount': '{n} séries', 'workouts.exercisesCount': '{n} exercício(s)',
    'workouts.errEnterName': 'Introduz um nome', 'workouts.errAddSet': 'Adiciona pelo menos uma série', 'workouts.savedToast': 'Treino guardado',
    'workouts.confirmDeleteSession': 'Eliminar esta sessão de treino?',
    'workouts.confirmDeleteExercise': 'Eliminar este exercício? Os treinos passados que o referenciam vão mostrar "(exercício eliminado)".',
    'workouts.deletedExercise': '(exercício eliminado)',

    'diet.heading': 'Dieta', 'diet.manageFoodsBtn': 'Gerir alimentos e preços', 'diet.logMealBtn': '+ Nova refeição',
    'diet.dailyCost': 'Custo diário', 'diet.dailyCalories': 'Calorias diárias', 'diet.mealHistory': 'Histórico de refeições',
    'diet.statAvgDaily30': 'Custo médio diário (30d)', 'diet.statTotalCost30': 'Custo total (30d)', 'diet.statCaloriesToday': 'Calorias hoje',
    'diet.statFoodsTracked': 'Alimentos registados', 'diet.emptyCostChart': 'Regista refeições com alimentos com preço',
    'diet.emptyKcalChart': 'Adiciona calorias por 100g aos teus alimentos para ver isto', 'diet.defaultMealName': 'Refeição',
    'diet.emptyList': 'Ainda sem refeições registadas.', 'diet.manageFoodsTitle': 'Gerir alimentos e preços',
    'diet.manageFoodsHint': 'Define o preço por quilo de cada alimento uma vez — é reutilizado automaticamente sempre que o registares numa refeição. Calorias e macros (g por 100g) são opcionais mas funcionam da mesma forma.',
    'diet.emptyFoodsManager': 'Ainda sem alimentos', 'diet.newFoodLabel': 'Nome do novo alimento',
    'diet.newFoodPlaceholder': 'ex: Peito de frango, Arroz, Azeite', 'diet.addFoodBtn': '+ Adicionar alimento',
    'diet.priceLabel': 'Preço / kg ({c})', 'diet.kcalLabel': 'Kcal / 100g (opcional)', 'diet.proteinLabel': 'Proteína /100g',
    'diet.carbsLabel': 'Carboidratos /100g', 'diet.fatLabel': 'Gordura /100g',
    'diet.addFoodFirstTitle': 'Adiciona primeiro um alimento',
    'diet.addFoodFirstHint': 'Precisas de pelo menos um alimento (com preço por kg) antes de registar uma refeição.',
    'diet.manageFoodsBtnShort': 'Gerir alimentos', 'diet.editMealTitle': 'Editar refeição', 'diet.logMealTitle': 'Registar refeição',
    'diet.mealNameLabel': 'Nome da refeição (opcional)', 'diet.mealNamePlaceholder': 'ex: Almoço', 'diet.foodsLabel': 'Alimentos',
    'diet.emptyMealItems': 'Ainda sem alimentos adicionados', 'diet.gramsPlaceholder': 'gramas',
    'diet.totalCost': 'Custo:', 'diet.totalCalories': 'Calorias:', 'diet.totalProtein': 'Proteína:', 'diet.totalCarbs': 'Carboidratos:',
    'diet.totalFat': 'Gordura:', 'diet.saveMealBtn': 'Guardar refeição', 'diet.pInitial': 'P', 'diet.cInitial': 'C', 'diet.fInitial': 'G',
    'diet.itemsCount': '{n} item(ns)', 'diet.kcalUnit': 'kcal',
    'diet.errEnterFoodName': 'Introduz o nome do alimento', 'diet.errAddFood': 'Adiciona pelo menos um alimento com quantidade',
    'diet.savedToast': 'Refeição guardada', 'diet.confirmDeleteMeal': 'Eliminar esta refeição?',
    'diet.confirmDeleteFood': 'Eliminar este alimento? As refeições passadas que o usam perdem os dados de custo/calorias.',

    'gallery.heading': 'Fotos e notas', 'gallery.addEntryBtn': '+ Adicionar registo',
    'gallery.emptyGrid': 'Ainda sem fotos ou notas. Adiciona o teu primeiro registo de progresso.', 'gallery.altPhoto': 'Foto de progresso',
    'gallery.addTitle': 'Adicionar registo de progresso', 'gallery.photoLabel': 'Foto (opcional)', 'gallery.noteLabel': 'Nota (opcional)',
    'gallery.notePlaceholder': 'Como está a correr?', 'gallery.progressPhoto': 'Foto de progresso', 'gallery.note': 'Nota',
    'gallery.errAddPhotoOrNote': 'Adiciona uma foto ou uma nota', 'gallery.errProcessImage': 'Não foi possível processar a imagem',
    'gallery.confirmDelete': 'Eliminar este registo?',

    'summary.heading': 'Resumo mensal', 'summary.prevMonth': 'Mês anterior', 'summary.nextMonth': 'Mês seguinte',
    'summary.statBodyEntries': 'Registos corporais', 'summary.statWeightChange': 'Variação de peso', 'summary.statWorkouts': 'Treinos',
    'summary.statMealsLogged': 'Refeições registadas', 'summary.statDietTotalCost': 'Custo total da dieta', 'summary.statAvgDailyCost': 'Custo médio diário',
    'summary.statTotalCalories': 'Calorias totais', 'summary.statPhotosNotes': 'Fotos / notas', 'summary.statSupplementDoses': 'Doses tomadas',
    'summary.macrosTitle': 'Macros consumidos este mês', 'summary.bodyMetrics': 'Métricas corporais', 'summary.workouts': 'Treinos',
    'summary.meals': 'Refeições', 'summary.gallery': 'Fotos e notas', 'summary.supplements': 'Suplementos e medicação',
    'summary.emptyBody': 'Sem métricas corporais este mês.', 'summary.emptyWorkouts': 'Sem treinos este mês.',
    'summary.emptyMeals': 'Sem refeições este mês.', 'summary.emptyGallery': 'Sem fotos ou notas este mês.',
    'summary.emptySupplements': 'Sem doses registadas este mês.',

    'supplements.heading': 'Suplementos e medicação', 'supplements.manageBtn': 'Gerir suplementos',
    'supplements.checklistTitle': 'Lista de hoje', 'supplements.adherenceTitle': 'Adesão (últimos 14 dias)',
    'supplements.historyTitle': 'Histórico',
    'supplements.emptyChecklist': 'Ainda não tens suplementos ou medicação ativos. Adiciona um para começar a acompanhar.',
    'supplements.emptyHistory': 'Ainda sem doses registadas.',
    'supplements.manageModalTitle': 'Gerir suplementos e medicação',
    'supplements.manageHint': 'Adiciona cada suplemento ou medicamento uma vez — define a dose e a frequência, depois marca-o diariamente na lista.',
    'supplements.nameLabel': 'Nome', 'supplements.namePlaceholder': 'ex: Vitamina D, Creatina, Omeprazol',
    'supplements.typeLabel': 'Tipo', 'supplements.typeSupplement': 'Suplemento', 'supplements.typeMedication': 'Medicação',
    'supplements.doseLabel': 'Dose', 'supplements.dosePlaceholder': 'ex: 5g, 500mg, 1 comprimido',
    'supplements.frequencyLabel': 'Frequência', 'supplements.frequencyPlaceholder': 'ex: Diário, 2x/dia, Seg-Sex',
    'supplements.activeLabel': 'Ativo', 'supplements.addBtn': '+ Adicionar', 'supplements.emptyManager': 'Ainda sem suplementos ou medicação.',
    'supplements.confirmDelete': 'Eliminar este suplemento/medicamento? O histórico é mantido, mas desaparece da lista diária.',
    'supplements.confirmDeleteLog': 'Remover esta dose registada?', 'supplements.statTakenToday': 'Tomados hoje',
    'supplements.emptyAdherenceChart': 'Regista doses para ver a tendência de adesão',
    'supplements.newBtn': '+ Adicionar novo', 'supplements.doseUnitless': '',

    'settings.heading': 'Definições e cópia de segurança', 'settings.preferences': 'Preferências', 'settings.currency': 'Símbolo da moeda',
    'settings.language': 'Idioma', 'settings.backupTitle': 'Cópia de segurança dos dados',
    'settings.backupHint': 'Tudo é guardado apenas neste navegador. Exporta uma cópia de segurança regularmente, especialmente antes de limpar dados do navegador ou mudar de dispositivo.',
    'settings.exportBtn': 'Exportar cópia (.json)', 'settings.importBtn': 'Importar cópia', 'settings.storageTitle': 'Uso de armazenamento',
    'settings.dangerTitle': 'Zona de perigo', 'settings.dangerHint': 'Isto apaga permanentemente todos os dados neste navegador. Exporta uma cópia primeiro.',
    'settings.eraseBtn': 'Apagar todos os dados', 'settings.storageUsage': '{size} usados localmente (cerca de {pct}% dos limites típicos de armazenamento do navegador). As fotos são o maior contribuinte — exporta uma cópia se adicionares muitas.',
    'settings.toastBackupDownloaded': 'Cópia de segurança descarregada', 'settings.toastInvalidBackup': 'Ficheiro de cópia inválido',
    'settings.toastBackupImported': 'Cópia de segurança importada', 'settings.toastAllErased': 'Todos os dados foram apagados',
    'settings.importTitle': 'Importar cópia de segurança',
    'settings.importWarning': 'Importar vai <b>substituir todos os dados atuais</b> neste navegador pelo conteúdo do ficheiro de cópia. Isto não pode ser desfeito a menos que tenhas outra cópia.',
    'settings.replaceData': 'Substituir dados',
    'settings.eraseWarning': 'Isto vai apagar permanentemente TODOS os dados neste navegador (métricas corporais, treinos, dieta, suplementos, fotos). Exporta uma cópia primeiro se ainda não o fizeste.',
    'toast.storageFull': 'Armazenamento cheio — exporta uma cópia de segurança e apaga fotos antigas.',
  }
};

function t(key, params) {
  const lang = state.settings.language;
  let str = (translations[lang] && translations[lang][key]) || translations.en[key] || key;
  if (params) {
    Object.keys(params).forEach(k => { str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), params[k]); });
  }
  return str;
}

function locale() {
  return state.settings.language === 'pt' ? 'pt-PT' : 'en-US';
}

/* =========================================================
   STORAGE
   ========================================================= */
const STORAGE_KEY = 'evolve.trackerData.v1';

function uid() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return 'id-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
}

function detectDefaultLanguage() {
  return (navigator.language || '').toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

function defaultState() {
  const lang = detectDefaultLanguage();
  return {
    settings: { currency: lang === 'pt' ? '€' : '$', theme: 'auto', language: lang },
    bodyMetrics: [],   // {id, date, weight, bodyFat, measurements:{}, notes}
    exercises: [],     // {id, name}
    workouts: [],       // {id, date, durationMin, notes, entries:[{exerciseId, sets:[{reps,weight}]}]}
    foods: [],          // {id, name, pricePerKg, kcalPer100g, proteinPer100g, carbsPer100g, fatPer100g}
    meals: [],           // {id, date, name, items:[{foodId, grams}], notes}
    gallery: [],          // {id, date, image, note}
    supplements: [],        // {id, name, type:'supplement'|'medication', dose, frequency, notes, active}
    supplementLogs: []       // {id, date, supplementId}
  };
}

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    const merged = Object.assign(defaultState(), parsed);
    merged.settings = Object.assign(defaultState().settings, parsed.settings || {});
    return merged;
  } catch (e) {
    console.error('Failed to load state, starting fresh', e);
    return defaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error(e);
    toast(t('toast.storageFull'));
  }
  updateStorageUsage();
}

/* =========================================================
   UTIL
   ========================================================= */
function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function fmtDate(d) {
  const dt = new Date(d + 'T00:00:00');
  if (isNaN(dt)) return d;
  return dt.toLocaleDateString(locale(), { month: 'short', day: 'numeric' });
}

function fmtDateLong(d) {
  const dt = new Date(d + 'T00:00:00');
  if (isNaN(dt)) return d;
  return dt.toLocaleDateString(locale(), { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

function fmtNum(n, decimals = 1) {
  if (n === null || n === undefined || isNaN(n)) return '—';
  return Number(n).toLocaleString(locale(), { minimumFractionDigits: 0, maximumFractionDigits: decimals });
}

function fmtCurrency(n) {
  if (n === null || n === undefined || isNaN(n)) return '—';
  return state.settings.currency + Number(n).toLocaleString(locale(), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str == null ? '' : String(str);
  return div.innerHTML;
}

function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove('show'), 2400);
}

function byDateAsc(a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; }
function byDateDesc(a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; }

/* =========================================================
   STATIC i18n (data-i18n attributes in HTML)
   ========================================================= */
function applyStaticI18n() {
  document.title = t('app.title');
  document.documentElement.setAttribute('lang', state.settings.language);
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.getAttribute('data-i18n-placeholder')); });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const v = t(el.getAttribute('data-i18n-title'));
    el.title = v; el.setAttribute('aria-label', v);
  });
}

/* =========================================================
   CHART (single-series SVG line chart w/ hover tooltip)
   ========================================================= */
function renderLineChart(container, points, opts = {}) {
  // points: [{date:'YYYY-MM-DD', value:Number}] sorted ascending
  const color = opts.color || 'var(--series-1)';
  const formatY = opts.formatY || (v => fmtNum(v));
  const unit = opts.unit || '';
  container.innerHTML = '';

  const clean = points.filter(p => p.value !== null && p.value !== undefined && !isNaN(p.value));
  if (clean.length === 0) {
    const div = document.createElement('div');
    div.className = 'chart-empty';
    div.textContent = opts.emptyText || t('body.emptyChart');
    container.appendChild(div);
    return;
  }

  const wrap = document.createElement('div');
  wrap.className = 'chart-wrap';
  container.appendChild(wrap);

  const W = 600, H = 220;
  const marginL = 42, marginR = 12, marginT = 16, marginB = 26;
  const plotW = W - marginL - marginR;
  const plotH = H - marginT - marginB;

  const values = clean.map(p => p.value);
  let minV = Math.min(...values), maxV = Math.max(...values);
  if (minV === maxV) { minV -= 1; maxV += 1; }
  const pad = (maxV - minV) * 0.12;
  minV -= pad; maxV += pad;

  const n = clean.length;
  const xFor = i => n === 1 ? marginL + plotW / 2 : marginL + (plotW * i) / (n - 1);
  const yFor = v => marginT + plotH - ((v - minV) / (maxV - minV)) * plotH;

  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('preserveAspectRatio', 'none');

  // gridlines (3 horizontal)
  const gridSteps = 3;
  for (let i = 0; i <= gridSteps; i++) {
    const v = minV + ((maxV - minV) * i) / gridSteps;
    const y = yFor(v);
    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', marginL); line.setAttribute('x2', W - marginR);
    line.setAttribute('y1', y); line.setAttribute('y2', y);
    line.setAttribute('class', i === 0 ? 'cx-baseline' : 'cx-grid');
    svg.appendChild(line);
    const label = document.createElementNS(svgNS, 'text');
    label.setAttribute('x', marginL - 8);
    label.setAttribute('y', y + 3);
    label.setAttribute('text-anchor', 'end');
    label.setAttribute('class', 'cx-axis-label');
    label.textContent = formatY(v);
    svg.appendChild(label);
  }

  // x-axis labels (up to 4)
  const xTickCount = Math.min(4, n);
  for (let t2 = 0; t2 < xTickCount; t2++) {
    const idx = xTickCount === 1 ? 0 : Math.round((t2 * (n - 1)) / (xTickCount - 1));
    const label = document.createElementNS(svgNS, 'text');
    label.setAttribute('x', xFor(idx));
    label.setAttribute('y', H - 6);
    label.setAttribute('text-anchor', t2 === 0 ? 'start' : t2 === xTickCount - 1 ? 'end' : 'middle');
    label.setAttribute('class', 'cx-axis-label');
    label.textContent = fmtDate(clean[idx].date);
    svg.appendChild(label);
  }

  // area fill
  if (n > 1) {
    let areaD = `M ${xFor(0)} ${yFor(clean[0].value)}`;
    clean.forEach((p, i) => { if (i > 0) areaD += ` L ${xFor(i)} ${yFor(p.value)}`; });
    areaD += ` L ${xFor(n - 1)} ${marginT + plotH} L ${xFor(0)} ${marginT + plotH} Z`;
    const area = document.createElementNS(svgNS, 'path');
    area.setAttribute('d', areaD);
    area.setAttribute('class', 'cx-area');
    area.setAttribute('fill', color);
    svg.appendChild(area);
  }

  // line
  if (n > 1) {
    let lineD = `M ${xFor(0)} ${yFor(clean[0].value)}`;
    clean.forEach((p, i) => { if (i > 0) lineD += ` L ${xFor(i)} ${yFor(p.value)}`; });
    const path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', lineD);
    path.setAttribute('class', 'cx-line');
    path.setAttribute('stroke', color);
    svg.appendChild(path);
  }

  // dots
  const dots = [];
  clean.forEach((p, i) => {
    const dot = document.createElementNS(svgNS, 'circle');
    dot.setAttribute('cx', xFor(i));
    dot.setAttribute('cy', yFor(p.value));
    dot.setAttribute('r', n > 40 ? 0 : 3);
    dot.setAttribute('class', 'cx-dot');
    dot.setAttribute('stroke', color);
    svg.appendChild(dot);
    dots.push(dot);
  });

  // crosshair
  const crosshair = document.createElementNS(svgNS, 'line');
  crosshair.setAttribute('class', 'cx-tooltip-line');
  crosshair.setAttribute('y1', marginT);
  crosshair.setAttribute('y2', marginT + plotH);
  crosshair.style.display = 'none';
  svg.appendChild(crosshair);

  const activeDot = document.createElementNS(svgNS, 'circle');
  activeDot.setAttribute('r', 5);
  activeDot.setAttribute('fill', color);
  activeDot.setAttribute('stroke', 'var(--surface-1)');
  activeDot.setAttribute('stroke-width', '2');
  activeDot.style.display = 'none';
  svg.appendChild(activeDot);

  // hit area
  const hit = document.createElementNS(svgNS, 'rect');
  hit.setAttribute('x', marginL); hit.setAttribute('y', marginT);
  hit.setAttribute('width', plotW); hit.setAttribute('height', plotH);
  hit.setAttribute('class', 'cx-hit');
  svg.appendChild(hit);

  wrap.appendChild(svg);

  const tip = document.createElement('div');
  tip.className = 'chart-tooltip';
  tip.style.display = 'none';
  wrap.appendChild(tip);

  function showAt(i) {
    const p = clean[i];
    const x = xFor(i), y = yFor(p.value);
    crosshair.setAttribute('x1', x); crosshair.setAttribute('x2', x);
    crosshair.style.display = '';
    activeDot.setAttribute('cx', x); activeDot.setAttribute('cy', y);
    activeDot.style.display = '';
    tip.style.display = '';
    tip.style.left = (x / W) * 100 + '%';
    tip.style.top = (y / H) * 100 + '%';
    tip.innerHTML = `<div>${fmtDateLong(p.date)}</div><div>${formatY(p.value)}${unit}</div>`;
  }
  function hideTip() {
    crosshair.style.display = 'none';
    activeDot.style.display = 'none';
    tip.style.display = 'none';
  }

  function handleMove(clientX) {
    const rect = svg.getBoundingClientRect();
    const relX = ((clientX - rect.left) / rect.width) * W;
    let closest = 0, closestDist = Infinity;
    for (let i = 0; i < n; i++) {
      const d = Math.abs(xFor(i) - relX);
      if (d < closestDist) { closestDist = d; closest = i; }
    }
    showAt(closest);
  }

  svg.addEventListener('mousemove', e => handleMove(e.clientX));
  svg.addEventListener('mouseleave', hideTip);
  svg.addEventListener('touchstart', e => { handleMove(e.touches[0].clientX); }, { passive: true });
  svg.addEventListener('touchmove', e => { handleMove(e.touches[0].clientX); }, { passive: true });
  svg.addEventListener('touchend', hideTip);

  if (n === 1) showAt(0);
}

/* =========================================================
   MODAL
   ========================================================= */
const modalBackdrop = document.getElementById('modalBackdrop');
const modalEl = document.getElementById('modal');

function openModal(titleHtml, bodyHtml, opts = {}) {
  modalEl.innerHTML = `
    <div class="modal-head">
      <h3>${titleHtml}</h3>
      <button class="modal-close" id="modalCloseBtn" aria-label="Close">&times;</button>
    </div>
    <div class="modal-body">${bodyHtml}</div>
  `;
  modalBackdrop.classList.remove('hidden');
  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
  if (!opts.keepScroll) modalEl.scrollTop = 0;
}
function closeModal() {
  modalBackdrop.classList.add('hidden');
  modalEl.innerHTML = '';
}
modalBackdrop.addEventListener('click', e => { if (e.target === modalBackdrop) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modalBackdrop.classList.contains('hidden')) closeModal(); });

function confirmAction(message, onConfirm) {
  openModal(t('common.areYouSure'), `
    <p class="hint" style="margin-bottom:18px;">${escapeHtml(message)}</p>
    <div class="modal-foot">
      <button class="btn" id="cfCancel">${t('common.cancel')}</button>
      <button class="btn danger" id="cfOk">${t('common.delete')}</button>
    </div>
  `);
  document.getElementById('cfCancel').addEventListener('click', closeModal);
  document.getElementById('cfOk').addEventListener('click', () => { onConfirm(); closeModal(); });
}

/* =========================================================
   TABS
   ========================================================= */
function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.panel').forEach(p => p.classList.toggle('hidden', p.dataset.panel !== tab));
  renderPanel(tab);
  if (window.innerWidth < 860) window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}
document.getElementById('tabbar').addEventListener('click', e => {
  const btn = e.target.closest('.tab-btn');
  if (btn) switchTab(btn.dataset.tab);
});

function renderPanel(tab) {
  if (tab === 'dashboard') renderDashboard();
  else if (tab === 'body') renderBody();
  else if (tab === 'workouts') renderWorkouts();
  else if (tab === 'diet') renderDiet();
  else if (tab === 'gallery') renderGallery();
  else if (tab === 'summary') renderSummary();
  else if (tab === 'supplements') renderSupplements();
  else if (tab === 'settings') renderSettings();
}

function getActiveTab() {
  const btn = document.querySelector('.tab-btn.active');
  return btn ? btn.dataset.tab : 'dashboard';
}

/* =========================================================
   THEME
   ========================================================= */
function applyTheme() {
  const th = state.settings.theme;
  if (th === 'dark' || th === 'light') document.documentElement.setAttribute('data-theme', th);
  else document.documentElement.removeAttribute('data-theme');
}
document.getElementById('themeToggle').addEventListener('click', () => {
  const cur = state.settings.theme;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const effectiveDark = cur === 'dark' || (cur === 'auto' && prefersDark);
  state.settings.theme = effectiveDark ? 'light' : 'dark';
  applyTheme();
  saveState();
});

/* =========================================================
   LANGUAGE
   ========================================================= */
function fullRefresh() {
  applyStaticI18n();
  renderPanel(getActiveTab());
}

/* =========================================================
   DASHBOARD
   ========================================================= */
function renderDashboard() {
  document.getElementById('todayLabel').textContent = fmtDateLong(todayStr());

  const statGrid = document.getElementById('statGrid');
  const sortedBody = [...state.bodyMetrics].sort(byDateAsc);
  const lastWeight = sortedBody.length ? sortedBody[sortedBody.length - 1] : null;
  const prevWeight = sortedBody.length > 1 ? sortedBody[sortedBody.length - 2] : null;
  const weightDelta = lastWeight && prevWeight ? lastWeight.weight - prevWeight.weight : null;

  const last14 = daysAgoStr(14);
  const recentMeals = state.meals.filter(m => m.date >= last14);
  const weekCost = sumMealsCost(recentMeals);

  const last7 = daysAgoStr(7);
  const workoutsThisWeek = state.workouts.filter(w => w.date >= last7).length;

  const activeSupps = state.supplements.filter(s => s.active !== false);
  const takenTodayIds = new Set(state.supplementLogs.filter(l => l.date === todayStr()).map(l => l.supplementId));
  const supplementsTiles = activeSupps.length
    ? statTile(t('dash.statSupplementsToday'), `${activeSupps.filter(s => takenTodayIds.has(s.id)).length}/${activeSupps.length}`, null)
    : '';

  statGrid.innerHTML = `
    ${statTile(t('dash.statLatestWeight'), lastWeight ? fmtNum(lastWeight.weight, 1) + ' kg' : '—', weightDelta)}
    ${statTile(t('dash.statWorkouts7d'), String(workoutsThisWeek), null)}
    ${statTile(t('dash.statDietCost14d'), fmtCurrency(weekCost), null)}
    ${statTile(t('dash.statExercisesTracked'), String(state.exercises.length), null)}
    ${supplementsTiles}
  `;

  renderLineChart(document.getElementById('dashWeightChart'),
    sortedBody.map(b => ({ date: b.date, value: b.weight })),
    { color: 'var(--series-1)', unit: ' kg', emptyText: t('dash.emptyWeightChart') });

  const costSeries = dailySeries(state.meals, last14, todayStr(), m => mealCost(m));
  renderLineChart(document.getElementById('dashCostChart'), costSeries,
    { color: 'var(--series-3)', formatY: v => fmtCurrency(v).replace(state.settings.currency, ''), emptyText: t('dash.emptyCostChart') });

  const recent = buildRecentActivity(8);
  const recentEl = document.getElementById('dashRecent');
  recentEl.innerHTML = recent.length ? recent.map(renderActivityItem).join('') : emptyState(t('dash.emptyRecent'));
}

function statTile(label, value, delta) {
  let deltaHtml = '';
  if (delta !== null && delta !== undefined && !isNaN(delta) && Math.abs(delta) > 0.01) {
    const cls = delta > 0 ? 'up' : 'down';
    const arrow = delta > 0 ? '▲' : '▼';
    deltaHtml = `<div class="delta ${cls}">${arrow} ${fmtNum(Math.abs(delta), 1)} kg</div>`;
  }
  return `<div class="stat-tile"><div class="label">${escapeHtml(label)}</div><div class="value">${value}</div>${deltaHtml}</div>`;
}

function daysAgoStr(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().slice(0, 10);
}

function dailySeries(items, fromDate, toDate, valueFn) {
  const map = {};
  items.forEach(it => {
    if (it.date < fromDate || it.date > toDate) return;
    map[it.date] = (map[it.date] || 0) + valueFn(it);
  });
  const out = [];
  let d = new Date(fromDate + 'T00:00:00');
  const end = new Date(toDate + 'T00:00:00');
  while (d <= end) {
    const ds = d.toISOString().slice(0, 10);
    out.push({ date: ds, value: map[ds] || 0 });
    d.setDate(d.getDate() + 1);
  }
  return out;
}

function buildRecentActivity(limit) {
  const items = [];
  state.bodyMetrics.forEach(b => items.push({ date: b.date, type: 'body', title: t('activity.bodyLogged'), sub: fmtNum(b.weight, 1) + ' kg' }));
  state.workouts.forEach(w => items.push({ date: w.date, type: 'workout', title: t('activity.workout', { name: workoutSummaryTitle(w) }), sub: t('workouts.exercisesCount', { n: (w.entries || []).length }) }));
  state.meals.forEach(m => items.push({ date: m.date, type: 'meal', title: m.name || t('activity.mealLogged'), sub: fmtCurrency(mealCost(m)) }));
  state.gallery.forEach(g => items.push({ date: g.date, type: 'gallery', title: g.image ? t('activity.photoAdded') : t('activity.noteAdded'), sub: (g.note || '').slice(0, 40) }));
  state.supplementLogs.forEach(l => {
    const s = state.supplements.find(x => x.id === l.supplementId);
    if (s) items.push({ date: l.date, type: 'supplement', title: t('activity.supplementTaken', { name: s.name }), sub: s.dose || '' });
  });
  items.sort(byDateDesc);
  return items.slice(0, limit);
}

function workoutSummaryTitle(w) {
  const names = (w.entries || []).map(e => exerciseName(e.exerciseId)).filter(Boolean);
  return names.slice(0, 2).join(', ') + (names.length > 2 ? ` +${names.length - 2}` : '') || t('activity.session');
}

const ICONS = {
  body: '⚖️', workout: '🏋️', meal: '🍽️', gallery: '📷', supplement: '💊'
};
function renderActivityItem(it) {
  return `<div class="list-item">
    <div class="li-main">
      <div class="li-title">${ICONS[it.type] || ''} ${escapeHtml(it.title)}</div>
      <div class="li-sub">${fmtDateLong(it.date)}${it.sub ? ' · ' + escapeHtml(it.sub) : ''}</div>
    </div>
  </div>`;
}

function emptyState(msg) {
  return `<div class="empty-state">${escapeHtml(msg)}</div>`;
}

/* =========================================================
   BODY METRICS
   ========================================================= */
function renderBody() {
  const sorted = [...state.bodyMetrics].sort(byDateAsc);
  renderLineChart(document.getElementById('bodyWeightChart'),
    sorted.map(b => ({ date: b.date, value: b.weight })),
    { color: 'var(--series-1)', unit: ' kg', emptyText: t('body.emptyChart') });

  const tbody = document.querySelector('#bodyTable tbody');
  const thead = document.querySelector('#bodyTable thead');
  thead.innerHTML = `<tr><th>${t('body.thDate')}</th><th>${t('body.thWeight')}</th><th>${t('body.thBodyFat')}</th><th>${t('body.thNotes')}</th><th></th></tr>`;
  const desc = [...state.bodyMetrics].sort(byDateDesc);
  tbody.innerHTML = desc.length ? desc.map(b => `
    <tr>
      <td>${fmtDate(b.date)}</td>
      <td class="num">${fmtNum(b.weight, 1)} kg</td>
      <td class="num">${b.bodyFat != null ? fmtNum(b.bodyFat, 1) + '%' : '—'}</td>
      <td>${escapeHtml(b.notes || '')}</td>
      <td class="row-actions">
        <button class="icon-btn" data-edit-body="${b.id}" title="${t('common.edit')}">✎</button>
        <button class="icon-btn" data-del-body="${b.id}" title="${t('common.delete')}">🗑</button>
      </td>
    </tr>
  `).join('') : `<tr><td colspan="5">${emptyState(t('body.emptyTable'))}</td></tr>`;

  tbody.querySelectorAll('[data-edit-body]').forEach(b => b.addEventListener('click', () => openBodyForm(b.dataset.editBody)));
  tbody.querySelectorAll('[data-del-body]').forEach(b => b.addEventListener('click', () => {
    confirmAction(t('body.confirmDelete'), () => {
      state.bodyMetrics = state.bodyMetrics.filter(x => x.id !== b.dataset.delBody);
      saveState(); renderBody();
    });
  }));
}

document.getElementById('btnAddBody').addEventListener('click', () => openBodyForm());

function openBodyForm(id) {
  const existing = id ? state.bodyMetrics.find(b => b.id === id) : null;
  openModal(existing ? t('body.editTitle') : t('body.logTitle'), `
    <div class="field"><label>${t('common.date')}</label><input type="date" id="fDate" value="${existing ? existing.date : todayStr()}" max="${todayStr()}"></div>
    <div class="field-row">
      <div class="field"><label>${t('body.weightLabel')}</label><input type="number" step="0.1" id="fWeight" value="${existing ? existing.weight : ''}" placeholder="${t('body.weightPlaceholder')}"></div>
      <div class="field"><label>${t('body.bodyFatLabel')}</label><input type="number" step="0.1" id="fBodyFat" value="${existing && existing.bodyFat != null ? existing.bodyFat : ''}" placeholder="${t('body.bodyFatPlaceholder')}"></div>
    </div>
    <div class="field"><label>${t('common.notesOptional')}</label><textarea id="fNotes" placeholder="${t('body.notesPlaceholder')}">${existing ? escapeHtml(existing.notes || '') : ''}</textarea></div>
    <div class="modal-foot">
      <button class="btn" id="cancelBtn">${t('common.cancel')}</button>
      <button class="btn primary" id="saveBtn">${t('common.save')}</button>
    </div>
  `);
  document.getElementById('cancelBtn').addEventListener('click', closeModal);
  document.getElementById('saveBtn').addEventListener('click', () => {
    const date = document.getElementById('fDate').value || todayStr();
    const weight = parseFloat(document.getElementById('fWeight').value);
    if (isNaN(weight) || weight <= 0) { toast(t('body.errInvalidWeight')); return; }
    const bodyFatRaw = document.getElementById('fBodyFat').value;
    const bodyFat = bodyFatRaw === '' ? null : parseFloat(bodyFatRaw);
    const notes = document.getElementById('fNotes').value.trim();
    if (existing) {
      Object.assign(existing, { date, weight, bodyFat, notes });
    } else {
      state.bodyMetrics.push({ id: uid(), date, weight, bodyFat, notes, measurements: {} });
    }
    saveState();
    closeModal();
    renderPanel(getActiveTab());
    toast(t('common.saved'));
  });
}

/* =========================================================
   WORKOUTS — exercises + sessions
   ========================================================= */
function exerciseName(id) {
  const ex = state.exercises.find(e => e.id === id);
  return ex ? ex.name : t('workouts.deletedExercise');
}

function renderWorkouts() {
  const select = document.getElementById('exerciseProgressSelect');
  const prevVal = select.value;
  select.innerHTML = state.exercises.length
    ? state.exercises.map(e => `<option value="${e.id}">${escapeHtml(e.name)}</option>`).join('')
    : `<option value="">${t('workouts.noExercisesOption')}</option>`;
  if (prevVal && state.exercises.some(e => e.id === prevVal)) select.value = prevVal;

  renderExerciseProgressChart(select.value);

  const list = document.getElementById('workoutList');
  const desc = [...state.workouts].sort(byDateDesc);
  list.innerHTML = desc.length ? desc.map(w => `
    <div class="list-item" style="align-items:flex-start;">
      <div class="li-main">
        <div class="li-title">${workoutSummaryTitle(w)}</div>
        <div class="li-sub">${fmtDateLong(w.date)}${w.durationMin ? ' · ' + w.durationMin + ' min' : ''}</div>
        <div class="li-sub">${(w.entries || []).map(e => `${escapeHtml(exerciseName(e.exerciseId))} (${t('workouts.setsCount', { n: (e.sets || []).length })})`).join(' · ')}</div>
      </div>
      <div class="li-right">
        <button class="icon-btn" data-edit-workout="${w.id}" title="${t('common.edit')}">✎</button>
        <button class="icon-btn" data-del-workout="${w.id}" title="${t('common.delete')}">🗑</button>
      </div>
    </div>
  `).join('') : emptyState(t('workouts.emptyList'));

  list.querySelectorAll('[data-edit-workout]').forEach(b => b.addEventListener('click', () => openWorkoutForm(b.dataset.editWorkout)));
  list.querySelectorAll('[data-del-workout]').forEach(b => b.addEventListener('click', () => {
    confirmAction(t('workouts.confirmDeleteSession'), () => {
      state.workouts = state.workouts.filter(x => x.id !== b.dataset.delWorkout);
      saveState(); renderWorkouts();
    });
  }));
}

document.getElementById('exerciseProgressSelect').addEventListener('change', e => renderExerciseProgressChart(e.target.value));

function renderExerciseProgressChart(exerciseId) {
  const el = document.getElementById('exerciseProgressChart');
  if (!exerciseId) { renderLineChart(el, [], { emptyText: t('workouts.emptyProgressChart') }); return; }
  const points = [];
  [...state.workouts].sort(byDateAsc).forEach(w => {
    const entry = (w.entries || []).find(e => e.exerciseId === exerciseId);
    if (!entry || !entry.sets || !entry.sets.length) return;
    const maxWeight = Math.max(...entry.sets.map(s => s.weight || 0));
    points.push({ date: w.date, value: maxWeight });
  });
  renderLineChart(el, points, { color: 'var(--series-5)', unit: ' kg', emptyText: t('workouts.emptyExerciseSessions') });
}

document.getElementById('btnManageExercises').addEventListener('click', openExerciseManager);

function openExerciseManager() {
  renderExerciseManagerModal();
}
function renderExerciseManagerModal() {
  const rows = state.exercises.map(e => `
    <div class="list-item">
      <div class="li-main"><input type="text" class="input" data-exname="${e.id}" value="${escapeHtml(e.name)}" style="border:none;background:transparent;padding:0;font-weight:600;"></div>
      <div class="li-right"><button class="icon-btn" data-delex="${e.id}" title="${t('common.delete')}">🗑</button></div>
    </div>
  `).join('');
  openModal(t('workouts.manageTitle'), `
    <p class="hint">${t('workouts.manageHint')}</p>
    <div class="recent-list" id="exList" style="margin-bottom:14px;">${rows || emptyState(t('workouts.emptyManager'))}</div>
    <div class="field-row">
      <div class="field" style="grid-column:1/3;"><label>${t('workouts.newExerciseLabel')}</label><input type="text" id="newExName" placeholder="${t('workouts.newExercisePlaceholder')}"></div>
    </div>
    <div class="modal-foot">
      <button class="btn" id="closeExBtn">${t('common.done')}</button>
      <button class="btn primary" id="addExBtn">${t('workouts.addBtn')}</button>
    </div>
  `, { keepScroll: true });

  document.getElementById('closeExBtn').addEventListener('click', () => { closeModal(); renderWorkouts(); });
  document.getElementById('addExBtn').addEventListener('click', () => {
    const input = document.getElementById('newExName');
    const name = input.value.trim();
    if (!name) { toast(t('workouts.errEnterName')); return; }
    state.exercises.push({ id: uid(), name });
    saveState();
    renderExerciseManagerModal();
  });
  document.querySelectorAll('[data-exname]').forEach(inp => {
    inp.addEventListener('change', () => {
      const ex = state.exercises.find(e => e.id === inp.dataset.exname);
      if (ex && inp.value.trim()) { ex.name = inp.value.trim(); saveState(); }
    });
  });
  document.querySelectorAll('[data-delex]').forEach(b => b.addEventListener('click', () => {
    confirmAction(t('workouts.confirmDeleteExercise'), () => {
      state.exercises = state.exercises.filter(e => e.id !== b.dataset.delex);
      saveState();
      renderExerciseManagerModal();
    });
  }));
}

document.getElementById('btnAddWorkout').addEventListener('click', () => openWorkoutForm());

function openWorkoutForm(id) {
  const existing = id ? state.workouts.find(w => w.id === id) : null;
  const draft = existing ? JSON.parse(JSON.stringify(existing)) : { date: todayStr(), durationMin: '', notes: '', entries: [] };

  if (!state.exercises.length) {
    openModal(t('workouts.addExerciseFirstTitle'), `
      <p class="hint">${t('workouts.addExerciseFirstHint')}</p>
      <div class="modal-foot"><button class="btn primary" id="goExBtn">${t('workouts.manageExercisesBtn')}</button></div>
    `);
    document.getElementById('goExBtn').addEventListener('click', () => { closeModal(); openExerciseManager(); });
    return;
  }

  function exerciseOptionsHtml(selectedId) {
    return state.exercises.map(e => `<option value="${e.id}" ${e.id === selectedId ? 'selected' : ''}>${escapeHtml(e.name)}</option>`).join('');
  }

  function setsHtml(entry, entryIdx) {
    return (entry.sets || []).map((s, si) => `
      <div class="set-row" data-entry="${entryIdx}" data-set="${si}">
        <div class="set-idx">${si + 1}</div>
        <input type="number" step="0.5" placeholder="${t('workouts.setWeightPlaceholder')}" class="setWeight" value="${s.weight != null ? s.weight : ''}">
        <input type="number" step="1" placeholder="${t('workouts.setRepsPlaceholder')}" class="setReps" value="${s.reps != null ? s.reps : ''}">
        <button type="button" class="icon-btn removeSet" data-entry="${entryIdx}" data-set="${si}">✕</button>
      </div>
    `).join('');
  }

  function entriesHtml() {
    return draft.entries.map((entry, idx) => `
      <div class="exercise-block" data-entry-block="${idx}">
        <div class="exercise-block-head">
          <select class="select entrySelect" data-entry="${idx}">${exerciseOptionsHtml(entry.exerciseId)}</select>
          <button type="button" class="icon-btn removeEntry" data-entry="${idx}">🗑</button>
        </div>
        <div class="sets-editor" data-sets-for="${idx}">${setsHtml(entry, idx)}</div>
        <button type="button" class="btn small ghost addSet" data-entry="${idx}" style="margin-top:6px;">${t('workouts.addSetBtn')}</button>
      </div>
    `).join('');
  }

  function render() {
    openModal(existing ? t('workouts.editTitle') : t('workouts.logTitle'), `
      <div class="field-row">
        <div class="field"><label>${t('common.date')}</label><input type="date" id="fDate" value="${draft.date}" max="${todayStr()}"></div>
        <div class="field"><label>${t('workouts.durationLabel')}</label><input type="number" id="fDuration" value="${draft.durationMin}"></div>
      </div>
      <div id="entriesWrap">${entriesHtml() || emptyState(t('workouts.emptySessionEntries'))}</div>
      <button type="button" class="btn" id="addEntryBtn" style="margin:6px 0 14px;">${t('workouts.addExerciseToSession')}</button>
      <div class="field"><label>${t('common.notesOptional')}</label><textarea id="fNotes">${escapeHtml(draft.notes || '')}</textarea></div>
      <div class="modal-foot">
        <button class="btn" id="cancelBtn">${t('common.cancel')}</button>
        <button class="btn primary" id="saveBtn">${t('workouts.saveBtn')}</button>
      </div>
    `, { keepScroll: true });
    wire();
  }

  function wire() {
    document.getElementById('cancelBtn').addEventListener('click', closeModal);
    document.getElementById('addEntryBtn').addEventListener('click', () => {
      draft.entries.push({ exerciseId: state.exercises[0].id, sets: [{ weight: '', reps: '' }] });
      syncFieldsIntoDraft();
      render();
    });
    document.querySelectorAll('.removeEntry').forEach(b => b.addEventListener('click', () => {
      draft.entries.splice(parseInt(b.dataset.entry), 1);
      syncFieldsIntoDraft();
      render();
    }));
    document.querySelectorAll('.addSet').forEach(b => b.addEventListener('click', () => {
      syncFieldsIntoDraft();
      draft.entries[parseInt(b.dataset.entry)].sets.push({ weight: '', reps: '' });
      render();
    }));
    document.querySelectorAll('.removeSet').forEach(b => b.addEventListener('click', () => {
      syncFieldsIntoDraft();
      draft.entries[parseInt(b.dataset.entry)].sets.splice(parseInt(b.dataset.set), 1);
      render();
    }));
    document.querySelectorAll('.entrySelect').forEach(sel => sel.addEventListener('change', () => {
      draft.entries[parseInt(sel.dataset.entry)].exerciseId = sel.value;
    }));
    document.getElementById('saveBtn').addEventListener('click', () => {
      syncFieldsIntoDraft();
      const date = document.getElementById('fDate').value || todayStr();
      const durationMin = document.getElementById('fDuration').value ? parseFloat(document.getElementById('fDuration').value) : null;
      const notes = document.getElementById('fNotes').value.trim();
      const cleanEntries = draft.entries.map(e => ({
        exerciseId: e.exerciseId,
        sets: (e.sets || [])
          .map(s => ({ weight: parseFloat(s.weight), reps: parseInt(s.reps) }))
          .filter(s => !isNaN(s.weight) || !isNaN(s.reps))
          .map(s => ({ weight: isNaN(s.weight) ? 0 : s.weight, reps: isNaN(s.reps) ? 0 : s.reps }))
      })).filter(e => e.sets.length > 0);

      if (cleanEntries.length === 0) { toast(t('workouts.errAddSet')); return; }

      if (existing) {
        Object.assign(existing, { date, durationMin, notes, entries: cleanEntries });
      } else {
        state.workouts.push({ id: uid(), date, durationMin, notes, entries: cleanEntries });
      }
      saveState();
      closeModal();
      renderPanel(getActiveTab());
      toast(t('workouts.savedToast'));
    });
  }

  function syncFieldsIntoDraft() {
    document.querySelectorAll('.set-row').forEach(row => {
      const eIdx = parseInt(row.dataset.entry), sIdx = parseInt(row.dataset.set);
      if (!draft.entries[eIdx] || !draft.entries[eIdx].sets[sIdx]) return;
      draft.entries[eIdx].sets[sIdx].weight = row.querySelector('.setWeight').value;
      draft.entries[eIdx].sets[sIdx].reps = row.querySelector('.setReps').value;
    });
    const dEl = document.getElementById('fDuration');
    if (dEl) draft.durationMin = dEl.value;
    const nEl = document.getElementById('fNotes');
    if (nEl) draft.notes = nEl.value;
    const dateEl = document.getElementById('fDate');
    if (dateEl) draft.date = dateEl.value;
  }

  if (draft.entries.length === 0) draft.entries.push({ exerciseId: state.exercises[0].id, sets: [{ weight: '', reps: '' }] });
  render();
}

/* =========================================================
   DIET — foods, meals, cost
   ========================================================= */
function foodById(id) { return state.foods.find(f => f.id === id); }

function mealCost(meal) {
  return (meal.items || []).reduce((sum, it) => {
    const f = foodById(it.foodId);
    if (!f || !f.pricePerKg) return sum;
    return sum + (f.pricePerKg / 1000) * it.grams;
  }, 0);
}
function mealKcal(meal) {
  return (meal.items || []).reduce((sum, it) => {
    const f = foodById(it.foodId);
    if (!f || !f.kcalPer100g) return sum;
    return sum + (f.kcalPer100g / 100) * it.grams;
  }, 0);
}
function mealMacro(meal, field) {
  return (meal.items || []).reduce((sum, it) => {
    const f = foodById(it.foodId);
    if (!f || !f[field]) return sum;
    return sum + (f[field] / 100) * it.grams;
  }, 0);
}
function mealProtein(meal) { return mealMacro(meal, 'proteinPer100g'); }
function mealCarbs(meal) { return mealMacro(meal, 'carbsPer100g'); }
function mealFat(meal) { return mealMacro(meal, 'fatPer100g'); }
function macroLineHtml(meal) {
  const p = mealProtein(meal), c = mealCarbs(meal), f = mealFat(meal);
  if (!p && !c && !f) return '';
  return ` · ${t('diet.pInitial')}${fmtNum(p, 0)} ${t('diet.cInitial')}${fmtNum(c, 0)} ${t('diet.fInitial')}${fmtNum(f, 0)}`;
}
function sumMealsCost(meals) { return meals.reduce((s, m) => s + mealCost(m), 0); }

function renderDiet() {
  const last14 = daysAgoStr(14);
  const last30 = daysAgoStr(30);
  const mealsRecent = state.meals.filter(m => m.date >= last30);
  const cost30 = sumMealsCost(mealsRecent);
  const avgDaily = cost30 / 30;
  const kcalToday = mealKcal({ items: state.meals.filter(m => m.date === todayStr()).flatMap(m => m.items) });

  document.getElementById('dietStatGrid').innerHTML = `
    <div class="stat-tile"><div class="label">${t('diet.statAvgDaily30')}</div><div class="value">${fmtCurrency(avgDaily)}</div></div>
    <div class="stat-tile"><div class="label">${t('diet.statTotalCost30')}</div><div class="value">${fmtCurrency(cost30)}</div></div>
    <div class="stat-tile"><div class="label">${t('diet.statCaloriesToday')}</div><div class="value">${fmtNum(kcalToday, 0)}</div></div>
    <div class="stat-tile"><div class="label">${t('diet.statFoodsTracked')}</div><div class="value">${state.foods.length}</div></div>
  `;

  const costSeries = dailySeries(state.meals, last14, todayStr(), m => mealCost(m));
  renderLineChart(document.getElementById('dietCostChart'), costSeries, {
    color: 'var(--series-3)', formatY: v => state.settings.currency + fmtNum(v, 0), emptyText: t('diet.emptyCostChart')
  });
  const kcalSeries = dailySeries(state.meals, last14, todayStr(), m => mealKcal(m));
  renderLineChart(document.getElementById('dietKcalChart'), kcalSeries, {
    color: 'var(--series-2)', formatY: v => fmtNum(v, 0), unit: ' kcal', emptyText: t('diet.emptyKcalChart')
  });

  const list = document.getElementById('mealList');
  const desc = [...state.meals].sort(byDateDesc);
  list.innerHTML = desc.length ? desc.map(m => `
    <div class="list-item">
      <div class="li-main">
        <div class="li-title">${escapeHtml(m.name || t('diet.defaultMealName'))}</div>
        <div class="li-sub">${fmtDateLong(m.date)} · ${t('diet.itemsCount', { n: (m.items || []).length })}${mealKcal(m) ? ' · ' + fmtNum(mealKcal(m), 0) + ' ' + t('diet.kcalUnit') : ''}${macroLineHtml(m)}</div>
      </div>
      <div class="li-right">
        <div class="li-value">${fmtCurrency(mealCost(m))}</div>
        <button class="icon-btn" data-edit-meal="${m.id}" title="${t('common.edit')}">✎</button>
        <button class="icon-btn" data-del-meal="${m.id}" title="${t('common.delete')}">🗑</button>
      </div>
    </div>
  `).join('') : emptyState(t('diet.emptyList'));

  list.querySelectorAll('[data-edit-meal]').forEach(b => b.addEventListener('click', () => openMealForm(b.dataset.editMeal)));
  list.querySelectorAll('[data-del-meal]').forEach(b => b.addEventListener('click', () => {
    confirmAction(t('diet.confirmDeleteMeal'), () => {
      state.meals = state.meals.filter(x => x.id !== b.dataset.delMeal);
      saveState(); renderDiet();
    });
  }));
}

document.getElementById('btnManageFoods').addEventListener('click', renderFoodManagerModal);

function renderFoodManagerModal() {
  const rows = state.foods.map(f => `
    <div class="exercise-block">
      <div class="exercise-block-head">
        <input type="text" class="input" data-fname="${f.id}" value="${escapeHtml(f.name)}" style="border:none;background:transparent;padding:0;font-weight:600;flex:1;">
        <button class="icon-btn" data-delfood="${f.id}" title="${t('common.delete')}">🗑</button>
      </div>
      <div class="field-row">
        <div class="field"><label>${t('diet.priceLabel', { c: state.settings.currency })}</label><input type="number" step="0.01" class="input" data-fprice="${f.id}" value="${f.pricePerKg != null ? f.pricePerKg : ''}"></div>
        <div class="field"><label>${t('diet.kcalLabel')}</label><input type="number" step="1" class="input" data-fkcal="${f.id}" value="${f.kcalPer100g != null ? f.kcalPer100g : ''}"></div>
      </div>
      <div class="field-row" style="grid-template-columns:1fr 1fr 1fr;">
        <div class="field"><label>${t('diet.proteinLabel')}</label><input type="number" step="0.1" class="input" data-fprotein="${f.id}" value="${f.proteinPer100g != null ? f.proteinPer100g : ''}"></div>
        <div class="field"><label>${t('diet.carbsLabel')}</label><input type="number" step="0.1" class="input" data-fcarbs="${f.id}" value="${f.carbsPer100g != null ? f.carbsPer100g : ''}"></div>
        <div class="field"><label>${t('diet.fatLabel')}</label><input type="number" step="0.1" class="input" data-ffat="${f.id}" value="${f.fatPer100g != null ? f.fatPer100g : ''}"></div>
      </div>
    </div>
  `).join('');
  openModal(t('diet.manageFoodsTitle'), `
    <p class="hint">${t('diet.manageFoodsHint')}</p>
    <div id="foodList" style="margin-bottom:8px;">${rows || emptyState(t('diet.emptyFoodsManager'))}</div>
    <div class="field-row">
      <div class="field" style="grid-column:1/3;"><label>${t('diet.newFoodLabel')}</label><input type="text" id="newFoodName" placeholder="${t('diet.newFoodPlaceholder')}"></div>
    </div>
    <div class="modal-foot">
      <button class="btn" id="closeFoodBtn">${t('common.done')}</button>
      <button class="btn primary" id="addFoodBtn">${t('diet.addFoodBtn')}</button>
    </div>
  `, { keepScroll: true });

  document.getElementById('closeFoodBtn').addEventListener('click', () => { closeModal(); renderDiet(); });
  document.getElementById('addFoodBtn').addEventListener('click', () => {
    const input = document.getElementById('newFoodName');
    const name = input.value.trim();
    if (!name) { toast(t('diet.errEnterFoodName')); return; }
    state.foods.push({ id: uid(), name, pricePerKg: null, kcalPer100g: null, proteinPer100g: null, carbsPer100g: null, fatPer100g: null });
    saveState();
    renderFoodManagerModal();
  });
  document.querySelectorAll('[data-fname]').forEach(inp => inp.addEventListener('change', () => {
    const f = foodById(inp.dataset.fname); if (f && inp.value.trim()) { f.name = inp.value.trim(); saveState(); }
  }));
  document.querySelectorAll('[data-fprice]').forEach(inp => inp.addEventListener('change', () => {
    const f = foodById(inp.dataset.fprice); if (f) { f.pricePerKg = inp.value === '' ? null : parseFloat(inp.value); saveState(); }
  }));
  document.querySelectorAll('[data-fkcal]').forEach(inp => inp.addEventListener('change', () => {
    const f = foodById(inp.dataset.fkcal); if (f) { f.kcalPer100g = inp.value === '' ? null : parseFloat(inp.value); saveState(); }
  }));
  document.querySelectorAll('[data-fprotein]').forEach(inp => inp.addEventListener('change', () => {
    const f = foodById(inp.dataset.fprotein); if (f) { f.proteinPer100g = inp.value === '' ? null : parseFloat(inp.value); saveState(); }
  }));
  document.querySelectorAll('[data-fcarbs]').forEach(inp => inp.addEventListener('change', () => {
    const f = foodById(inp.dataset.fcarbs); if (f) { f.carbsPer100g = inp.value === '' ? null : parseFloat(inp.value); saveState(); }
  }));
  document.querySelectorAll('[data-ffat]').forEach(inp => inp.addEventListener('change', () => {
    const f = foodById(inp.dataset.ffat); if (f) { f.fatPer100g = inp.value === '' ? null : parseFloat(inp.value); saveState(); }
  }));
  document.querySelectorAll('[data-delfood]').forEach(b => b.addEventListener('click', () => {
    confirmAction(t('diet.confirmDeleteFood'), () => {
      state.foods = state.foods.filter(f => f.id !== b.dataset.delfood);
      saveState();
      renderFoodManagerModal();
    });
  }));
}

document.getElementById('btnAddMeal').addEventListener('click', () => openMealForm());

function openMealForm(id) {
  const existing = id ? state.meals.find(m => m.id === id) : null;
  const draft = existing ? JSON.parse(JSON.stringify(existing)) : { date: todayStr(), name: '', items: [], notes: '' };

  if (!state.foods.length) {
    openModal(t('diet.addFoodFirstTitle'), `
      <p class="hint">${t('diet.addFoodFirstHint')}</p>
      <div class="modal-foot"><button class="btn primary" id="goFoodBtn">${t('diet.manageFoodsBtnShort')}</button></div>
    `);
    document.getElementById('goFoodBtn').addEventListener('click', () => { closeModal(); renderFoodManagerModal(); });
    return;
  }

  function foodOptionsHtml(selectedId) {
    return state.foods.map(f => `<option value="${f.id}" ${f.id === selectedId ? 'selected' : ''}>${escapeHtml(f.name)}</option>`).join('');
  }

  function itemsHtml() {
    return draft.items.map((it, idx) => `
      <div class="meal-item-row" data-item="${idx}">
        <select class="select itemFood" data-item="${idx}">${foodOptionsHtml(it.foodId)}</select>
        <input type="number" step="1" class="itemGrams" placeholder="${t('diet.gramsPlaceholder')}" value="${it.grams != null ? it.grams : ''}">
        <button type="button" class="icon-btn removeItem" data-item="${idx}">🗑</button>
      </div>
    `).join('');
  }

  function computeTotals() {
    syncFieldsIntoDraft();
    let cost = 0, kcal = 0, protein = 0, carbs = 0, fat = 0;
    draft.items.forEach(it => {
      const f = foodById(it.foodId);
      const g = parseFloat(it.grams) || 0;
      if (f && f.pricePerKg) cost += (f.pricePerKg / 1000) * g;
      if (f && f.kcalPer100g) kcal += (f.kcalPer100g / 100) * g;
      if (f && f.proteinPer100g) protein += (f.proteinPer100g / 100) * g;
      if (f && f.carbsPer100g) carbs += (f.carbsPer100g / 100) * g;
      if (f && f.fatPer100g) fat += (f.fatPer100g / 100) * g;
    });
    return { cost, kcal, protein, carbs, fat };
  }

  function totalsHtml(tt) {
    return `<span>${t('diet.totalCost')} <b>${fmtCurrency(tt.cost)}</b></span><span>${t('diet.totalCalories')} <b>${fmtNum(tt.kcal, 0)}</b></span><span>${t('diet.totalProtein')} <b>${fmtNum(tt.protein, 0)}g</b></span><span>${t('diet.totalCarbs')} <b>${fmtNum(tt.carbs, 0)}g</b></span><span>${t('diet.totalFat')} <b>${fmtNum(tt.fat, 0)}g</b></span>`;
  }

  function render() {
    const totals = draft.items.length ? computeTotals() : { cost: 0, kcal: 0, protein: 0, carbs: 0, fat: 0 };
    openModal(existing ? t('diet.editMealTitle') : t('diet.logMealTitle'), `
      <div class="field-row">
        <div class="field"><label>${t('common.date')}</label><input type="date" id="fDate" value="${draft.date}" max="${todayStr()}"></div>
        <div class="field"><label>${t('diet.mealNameLabel')}</label><input type="text" id="fName" value="${escapeHtml(draft.name || '')}" placeholder="${t('diet.mealNamePlaceholder')}"></div>
      </div>
      <label style="display:block;font-size:12.5px;font-weight:600;color:var(--text-secondary);margin-bottom:6px;">${t('diet.foodsLabel')}</label>
      <div id="itemsWrap">${itemsHtml() || emptyState(t('diet.emptyMealItems'))}</div>
      <button type="button" class="btn" id="addItemBtn" style="margin:8px 0 12px;">${t('diet.addFoodBtn')}</button>
      <div class="meal-totals">${totalsHtml(totals)}</div>
      <div class="field" style="margin-top:12px;"><label>${t('common.notesOptional')}</label><textarea id="fNotes">${escapeHtml(draft.notes || '')}</textarea></div>
      <div class="modal-foot">
        <button class="btn" id="cancelBtn">${t('common.cancel')}</button>
        <button class="btn primary" id="saveBtn">${t('diet.saveMealBtn')}</button>
      </div>
    `, { keepScroll: true });
    wire();
  }

  function wire() {
    document.getElementById('cancelBtn').addEventListener('click', closeModal);
    document.getElementById('addItemBtn').addEventListener('click', () => {
      syncFieldsIntoDraft();
      draft.items.push({ foodId: state.foods[0].id, grams: 100 });
      render();
    });
    document.querySelectorAll('.removeItem').forEach(b => b.addEventListener('click', () => {
      syncFieldsIntoDraft();
      draft.items.splice(parseInt(b.dataset.item), 1);
      render();
    }));
    document.querySelectorAll('.itemFood').forEach(sel => sel.addEventListener('change', () => {
      draft.items[parseInt(sel.dataset.item)].foodId = sel.value;
      render();
    }));
    document.querySelectorAll('.itemGrams').forEach(inp => inp.addEventListener('input', () => {
      const row = inp.closest('.meal-item-row');
      draft.items[parseInt(row.dataset.item)].grams = inp.value;
      const totals = computeTotals();
      const totalsEl = document.querySelector('.meal-totals');
      if (totalsEl) totalsEl.innerHTML = totalsHtml(totals);
    }));
    document.getElementById('saveBtn').addEventListener('click', () => {
      syncFieldsIntoDraft();
      const date = document.getElementById('fDate').value || todayStr();
      const name = document.getElementById('fName').value.trim();
      const notes = document.getElementById('fNotes').value.trim();
      const cleanItems = draft.items
        .map(it => ({ foodId: it.foodId, grams: parseFloat(it.grams) }))
        .filter(it => it.foodId && !isNaN(it.grams) && it.grams > 0);
      if (cleanItems.length === 0) { toast(t('diet.errAddFood')); return; }
      if (existing) {
        Object.assign(existing, { date, name, notes, items: cleanItems });
      } else {
        state.meals.push({ id: uid(), date, name, notes, items: cleanItems });
      }
      saveState();
      closeModal();
      renderPanel(getActiveTab());
      toast(t('diet.savedToast'));
    });
  }

  function syncFieldsIntoDraft() {
    document.querySelectorAll('.meal-item-row').forEach(row => {
      const idx = parseInt(row.dataset.item);
      if (!draft.items[idx]) return;
      draft.items[idx].grams = row.querySelector('.itemGrams').value;
    });
    const dateEl = document.getElementById('fDate'); if (dateEl) draft.date = dateEl.value;
    const nameEl = document.getElementById('fName'); if (nameEl) draft.name = nameEl.value;
    const notesEl = document.getElementById('fNotes'); if (notesEl) draft.notes = notesEl.value;
  }

  if (draft.items.length === 0) draft.items.push({ foodId: state.foods[0].id, grams: 100 });
  render();
}

/* =========================================================
   GALLERY (photos + notes)
   ========================================================= */
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  const desc = [...state.gallery].sort(byDateDesc);
  if (!desc.length) { grid.innerHTML = emptyState(t('gallery.emptyGrid')); return; }
  grid.innerHTML = desc.map(g => `
    <div class="gallery-item ${g.image ? '' : 'note-only'}" data-gid="${g.id}">
      ${g.image ? `<img src="${g.image}" alt="${t('gallery.altPhoto')}">` : ''}
      <div class="gi-meta">
        <div class="gi-date">${fmtDate(g.date)}</div>
        ${g.note ? `<div class="gi-note">${escapeHtml(g.note)}</div>` : ''}
      </div>
    </div>
  `).join('');
  grid.querySelectorAll('[data-gid]').forEach(el => el.addEventListener('click', () => openGalleryDetail(el.dataset.gid)));
}

function openGalleryDetail(id) {
  const g = state.gallery.find(x => x.id === id);
  if (!g) return;
  openModal(fmtDateLong(g.date), `
    ${g.image ? `<img src="${g.image}" style="width:100%;border-radius:12px;margin-bottom:12px;" alt="${t('gallery.altPhoto')}">` : ''}
    <p style="white-space:pre-wrap;">${escapeHtml(g.note || '')}</p>
    <div class="modal-foot">
      <button class="btn danger" id="delGalleryBtn">${t('common.delete')}</button>
      <button class="btn primary" id="closeGalleryBtn">${t('common.close')}</button>
    </div>
  `);
  document.getElementById('closeGalleryBtn').addEventListener('click', closeModal);
  document.getElementById('delGalleryBtn').addEventListener('click', () => {
    confirmAction(t('gallery.confirmDelete'), () => {
      state.gallery = state.gallery.filter(x => x.id !== id);
      saveState();
      closeModal();
      renderPanel(getActiveTab());
    });
  });
}

document.getElementById('btnAddPhoto').addEventListener('click', () => {
  openModal(t('gallery.addTitle'), `
    <div class="field"><label>${t('common.date')}</label><input type="date" id="fDate" value="${todayStr()}" max="${todayStr()}"></div>
    <div class="field"><label>${t('gallery.photoLabel')}</label><input type="file" id="fPhoto" accept="image/*"></div>
    <div class="field"><label>${t('gallery.noteLabel')}</label><textarea id="fNote" placeholder="${t('gallery.notePlaceholder')}"></textarea></div>
    <p class="hint-sm" id="photoHint" style="margin-top:-6px;"></p>
    <div class="modal-foot">
      <button class="btn" id="cancelBtn">${t('common.cancel')}</button>
      <button class="btn primary" id="saveBtn">${t('common.save')}</button>
    </div>
  `);
  document.getElementById('cancelBtn').addEventListener('click', closeModal);
  document.getElementById('saveBtn').addEventListener('click', async () => {
    const date = document.getElementById('fDate').value || todayStr();
    const note = document.getElementById('fNote').value.trim();
    const fileInput = document.getElementById('fPhoto');
    const file = fileInput.files[0];

    if (!file && !note) { toast(t('gallery.errAddPhotoOrNote')); return; }

    let image = null;
    if (file) {
      try {
        image = await compressImageToDataUrl(file, 900, 0.75);
      } catch (e) {
        console.error(e);
        toast(t('gallery.errProcessImage'));
        return;
      }
    }
    state.gallery.push({ id: uid(), date, note, image });
    saveState();
    closeModal();
    renderPanel(getActiveTab());
    toast(t('common.saved'));
  });
});

function compressImageToDataUrl(file, maxDim, quality) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          if (width > height) { height = Math.round(height * (maxDim / width)); width = maxDim; }
          else { width = Math.round(width * (maxDim / height)); height = maxDim; }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

/* =========================================================
   SUPPLEMENTS & MEDICATION
   ========================================================= */
function supplementById(id) { return state.supplements.find(s => s.id === id); }

function isTakenOn(supplementId, date) {
  return state.supplementLogs.some(l => l.supplementId === supplementId && l.date === date);
}

function toggleSupplementLog(supplementId, date) {
  const idx = state.supplementLogs.findIndex(l => l.supplementId === supplementId && l.date === date);
  if (idx >= 0) state.supplementLogs.splice(idx, 1);
  else state.supplementLogs.push({ id: uid(), date, supplementId });
  saveState();
}

function renderSupplements() {
  const active = state.supplements.filter(s => s.active !== false);
  const today = todayStr();

  const checklistEl = document.getElementById('supplementsChecklist');
  checklistEl.innerHTML = active.length ? active.map(s => {
    const taken = isTakenOn(s.id, today);
    return `
      <label class="checklist-item ${taken ? 'taken' : ''}">
        <input type="checkbox" data-supp-check="${s.id}" ${taken ? 'checked' : ''}>
        <span class="checklist-main">
          <span class="checklist-name">${escapeHtml(s.name)}</span>
          <span class="checklist-sub">${escapeHtml(s.dose || '')}${s.dose && s.frequency ? ' · ' : ''}${escapeHtml(s.frequency || '')}</span>
        </span>
        <span class="checklist-type type-${s.type === 'medication' ? 'medication' : 'supplement'}">${s.type === 'medication' ? t('supplements.typeMedication') : t('supplements.typeSupplement')}</span>
      </label>
    `;
  }).join('') : emptyState(t('supplements.emptyChecklist'));

  checklistEl.querySelectorAll('[data-supp-check]').forEach(cb => cb.addEventListener('change', () => {
    toggleSupplementLog(cb.dataset.suppCheck, today);
    renderSupplements();
  }));

  const last14 = daysAgoStr(13);
  const series = dailySeries(state.supplementLogs, last14, today, () => 1);
  renderLineChart(document.getElementById('supplementsAdherenceChart'), active.length ? series : [],
    { color: 'var(--series-4)', formatY: v => fmtNum(Math.round(v) === 0 ? 0 : Math.round(v), 0), emptyText: t('supplements.emptyAdherenceChart') });

  const historyEl = document.getElementById('supplementsHistory');
  const logsDesc = [...state.supplementLogs].sort(byDateDesc).slice(0, 40);
  historyEl.innerHTML = logsDesc.length ? logsDesc.map(l => {
    const s = supplementById(l.supplementId);
    return `
      <div class="list-item">
        <div class="li-main">
          <div class="li-title">${escapeHtml(s ? s.name : t('workouts.deletedExercise'))}</div>
          <div class="li-sub">${fmtDateLong(l.date)}${s && s.dose ? ' · ' + escapeHtml(s.dose) : ''}</div>
        </div>
        <div class="li-right"><button class="icon-btn" data-del-supplog="${l.id}" title="${t('common.delete')}">🗑</button></div>
      </div>
    `;
  }).join('') : emptyState(t('supplements.emptyHistory'));

  historyEl.querySelectorAll('[data-del-supplog]').forEach(b => b.addEventListener('click', () => {
    confirmAction(t('supplements.confirmDeleteLog'), () => {
      state.supplementLogs = state.supplementLogs.filter(l => l.id !== b.dataset.delSupplog);
      saveState();
      renderSupplements();
    });
  }));
}

document.getElementById('btnManageSupplements').addEventListener('click', renderSupplementManagerModal);

function renderSupplementManagerModal() {
  const rows = state.supplements.map(s => `
    <div class="exercise-block">
      <div class="exercise-block-head">
        <input type="text" class="input" data-suppname="${s.id}" value="${escapeHtml(s.name)}" style="border:none;background:transparent;padding:0;font-weight:600;flex:1;">
        <button class="icon-btn" data-delsupp="${s.id}" title="${t('common.delete')}">🗑</button>
      </div>
      <div class="field-row">
        <div class="field">
          <label>${t('supplements.typeLabel')}</label>
          <select class="select" data-supptype="${s.id}" style="width:100%;">
            <option value="supplement" ${s.type !== 'medication' ? 'selected' : ''}>${t('supplements.typeSupplement')}</option>
            <option value="medication" ${s.type === 'medication' ? 'selected' : ''}>${t('supplements.typeMedication')}</option>
          </select>
        </div>
        <div class="field"><label>${t('supplements.doseLabel')}</label><input type="text" class="input" data-suppdose="${s.id}" value="${escapeHtml(s.dose || '')}" placeholder="${t('supplements.dosePlaceholder')}"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>${t('supplements.frequencyLabel')}</label><input type="text" class="input" data-suppfreq="${s.id}" value="${escapeHtml(s.frequency || '')}" placeholder="${t('supplements.frequencyPlaceholder')}"></div>
        <div class="field" style="display:flex;align-items:flex-end;padding-bottom:9px;">
          <label style="display:flex;align-items:center;gap:6px;font-weight:600;color:var(--text-secondary);font-size:12.5px;">
            <input type="checkbox" data-suppactive="${s.id}" ${s.active !== false ? 'checked' : ''}> ${t('supplements.activeLabel')}
          </label>
        </div>
      </div>
    </div>
  `).join('');
  openModal(t('supplements.manageModalTitle'), `
    <p class="hint">${t('supplements.manageHint')}</p>
    <div id="suppList" style="margin-bottom:8px;">${rows || emptyState(t('supplements.emptyManager'))}</div>
    <div class="field-row">
      <div class="field" style="grid-column:1/3;"><label>${t('supplements.nameLabel')}</label><input type="text" id="newSuppName" placeholder="${t('supplements.namePlaceholder')}"></div>
    </div>
    <div class="modal-foot">
      <button class="btn" id="closeSuppBtn">${t('common.done')}</button>
      <button class="btn primary" id="addSuppBtn">${t('supplements.addBtn')}</button>
    </div>
  `, { keepScroll: true });

  document.getElementById('closeSuppBtn').addEventListener('click', () => { closeModal(); renderPanel(getActiveTab()); });
  document.getElementById('addSuppBtn').addEventListener('click', () => {
    const input = document.getElementById('newSuppName');
    const name = input.value.trim();
    if (!name) { toast(t('workouts.errEnterName')); return; }
    state.supplements.push({ id: uid(), name, type: 'supplement', dose: '', frequency: '', notes: '', active: true });
    saveState();
    renderSupplementManagerModal();
  });
  document.querySelectorAll('[data-suppname]').forEach(inp => inp.addEventListener('change', () => {
    const s = supplementById(inp.dataset.suppname); if (s && inp.value.trim()) { s.name = inp.value.trim(); saveState(); }
  }));
  document.querySelectorAll('[data-supptype]').forEach(sel => sel.addEventListener('change', () => {
    const s = supplementById(sel.dataset.supptype); if (s) { s.type = sel.value; saveState(); }
  }));
  document.querySelectorAll('[data-suppdose]').forEach(inp => inp.addEventListener('change', () => {
    const s = supplementById(inp.dataset.suppdose); if (s) { s.dose = inp.value.trim(); saveState(); }
  }));
  document.querySelectorAll('[data-suppfreq]').forEach(inp => inp.addEventListener('change', () => {
    const s = supplementById(inp.dataset.suppfreq); if (s) { s.frequency = inp.value.trim(); saveState(); }
  }));
  document.querySelectorAll('[data-suppactive]').forEach(cb => cb.addEventListener('change', () => {
    const s = supplementById(cb.dataset.suppactive); if (s) { s.active = cb.checked; saveState(); }
  }));
  document.querySelectorAll('[data-delsupp]').forEach(b => b.addEventListener('click', () => {
    confirmAction(t('supplements.confirmDelete'), () => {
      state.supplements = state.supplements.filter(s => s.id !== b.dataset.delsupp);
      saveState();
      renderSupplementManagerModal();
    });
  }));
}

/* =========================================================
   MONTHLY SUMMARY
   ========================================================= */
let summaryMonth = todayStr().slice(0, 7); // 'YYYY-MM'

function monthLabel(m) {
  const [y, mo] = m.split('-').map(Number);
  return new Date(y, mo - 1, 1).toLocaleDateString(locale(), { month: 'long', year: 'numeric' });
}
function shiftMonth(m, delta) {
  const [y, mo] = m.split('-').map(Number);
  const d = new Date(y, mo - 1 + delta, 1);
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
}
function daysInMonth(m) {
  const [y, mo] = m.split('-').map(Number);
  return new Date(y, mo, 0).getDate();
}

document.getElementById('summaryPrevMonth').addEventListener('click', () => {
  summaryMonth = shiftMonth(summaryMonth, -1);
  renderSummary();
});
document.getElementById('summaryNextMonth').addEventListener('click', () => {
  summaryMonth = shiftMonth(summaryMonth, 1);
  renderSummary();
});

function renderSummary() {
  document.getElementById('summaryMonthLabel').textContent = monthLabel(summaryMonth);
  const prefix = summaryMonth;

  const bodyM = state.bodyMetrics.filter(b => b.date.startsWith(prefix)).sort(byDateAsc);
  const workoutsM = state.workouts.filter(w => w.date.startsWith(prefix)).sort(byDateAsc);
  const mealsM = state.meals.filter(m => m.date.startsWith(prefix)).sort(byDateAsc);
  const galleryM = state.gallery.filter(g => g.date.startsWith(prefix)).sort(byDateAsc);
  const suppLogsM = state.supplementLogs.filter(l => l.date.startsWith(prefix)).sort(byDateAsc);

  const weightStart = bodyM.length ? bodyM[0].weight : null;
  const weightEnd = bodyM.length ? bodyM[bodyM.length - 1].weight : null;
  const weightDelta = (weightStart != null && weightEnd != null) ? weightEnd - weightStart : null;

  const totalCost = sumMealsCost(mealsM);
  const totalKcal = mealsM.reduce((s, m) => s + mealKcal(m), 0);
  const totalProtein = mealsM.reduce((s, m) => s + mealProtein(m), 0);
  const totalCarbs = mealsM.reduce((s, m) => s + mealCarbs(m), 0);
  const totalFat = mealsM.reduce((s, m) => s + mealFat(m), 0);
  const avgDailyCost = totalCost / daysInMonth(prefix);

  document.getElementById('summaryStatGrid').innerHTML = `
    ${statTile(t('summary.statBodyEntries'), String(bodyM.length), null)}
    ${statTile(t('summary.statWeightChange'), weightDelta != null ? (weightDelta >= 0 ? '+' : '') + fmtNum(weightDelta, 1) + ' kg' : '—', null)}
    ${statTile(t('summary.statWorkouts'), String(workoutsM.length), null)}
    ${statTile(t('summary.statMealsLogged'), String(mealsM.length), null)}
    ${statTile(t('summary.statDietTotalCost'), fmtCurrency(totalCost), null)}
    ${statTile(t('summary.statAvgDailyCost'), fmtCurrency(avgDailyCost), null)}
    ${statTile(t('summary.statTotalCalories'), fmtNum(totalKcal, 0), null)}
    ${statTile(t('summary.statPhotosNotes'), String(galleryM.length), null)}
    ${statTile(t('summary.statSupplementDoses'), String(suppLogsM.length), null)}
  `;

  const macrosCard = document.getElementById('summaryMacrosCard');
  if (totalProtein || totalCarbs || totalFat) {
    macrosCard.style.display = '';
    document.getElementById('summaryMacros').innerHTML = `
      <div class="legend">
        <span class="legend-item"><span class="legend-dot" style="background:var(--series-1);"></span>${t('diet.totalProtein')} <b>${fmtNum(totalProtein, 0)}g</b></span>
        <span class="legend-item"><span class="legend-dot" style="background:var(--series-3);"></span>${t('diet.totalCarbs')} <b>${fmtNum(totalCarbs, 0)}g</b></span>
        <span class="legend-item"><span class="legend-dot" style="background:var(--series-6);"></span>${t('diet.totalFat')} <b>${fmtNum(totalFat, 0)}g</b></span>
      </div>
    `;
  } else {
    macrosCard.style.display = 'none';
  }

  const bodyEl = document.getElementById('summaryBody');
  const bodyDesc = [...bodyM].sort(byDateDesc);
  bodyEl.innerHTML = bodyDesc.length ? bodyDesc.map(b => `
    <div class="list-item">
      <div class="li-main">
        <div class="li-title">${fmtNum(b.weight, 1)} kg${b.bodyFat != null ? ' · ' + fmtNum(b.bodyFat, 1) + t('body.fatSuffix') : ''}</div>
        <div class="li-sub">${fmtDateLong(b.date)}${b.notes ? ' · ' + escapeHtml(b.notes) : ''}</div>
      </div>
      <div class="li-right"><button class="icon-btn" data-sum-edit-body="${b.id}" title="${t('common.edit')}">✎</button></div>
    </div>
  `).join('') : emptyState(t('summary.emptyBody'));
  bodyEl.querySelectorAll('[data-sum-edit-body]').forEach(b => b.addEventListener('click', () => openBodyForm(b.dataset.sumEditBody)));

  const workoutsEl = document.getElementById('summaryWorkouts');
  const workoutsDesc = [...workoutsM].sort(byDateDesc);
  workoutsEl.innerHTML = workoutsDesc.length ? workoutsDesc.map(w => `
    <div class="list-item" style="align-items:flex-start;">
      <div class="li-main">
        <div class="li-title">${workoutSummaryTitle(w)}</div>
        <div class="li-sub">${fmtDateLong(w.date)}${w.durationMin ? ' · ' + w.durationMin + ' min' : ''}</div>
        <div class="li-sub">${(w.entries || []).map(e => `${escapeHtml(exerciseName(e.exerciseId))} (${t('workouts.setsCount', { n: (e.sets || []).length })})`).join(' · ')}</div>
      </div>
      <div class="li-right"><button class="icon-btn" data-sum-edit-workout="${w.id}" title="${t('common.edit')}">✎</button></div>
    </div>
  `).join('') : emptyState(t('summary.emptyWorkouts'));
  workoutsEl.querySelectorAll('[data-sum-edit-workout]').forEach(b => b.addEventListener('click', () => openWorkoutForm(b.dataset.sumEditWorkout)));

  const mealsEl = document.getElementById('summaryMeals');
  const mealsDesc = [...mealsM].sort(byDateDesc);
  mealsEl.innerHTML = mealsDesc.length ? mealsDesc.map(m => `
    <div class="list-item">
      <div class="li-main">
        <div class="li-title">${escapeHtml(m.name || t('diet.defaultMealName'))}</div>
        <div class="li-sub">${fmtDateLong(m.date)} · ${t('diet.itemsCount', { n: (m.items || []).length })}${mealKcal(m) ? ' · ' + fmtNum(mealKcal(m), 0) + ' ' + t('diet.kcalUnit') : ''}${macroLineHtml(m)}</div>
      </div>
      <div class="li-right">
        <div class="li-value">${fmtCurrency(mealCost(m))}</div>
        <button class="icon-btn" data-sum-edit-meal="${m.id}" title="${t('common.edit')}">✎</button>
      </div>
    </div>
  `).join('') : emptyState(t('summary.emptyMeals'));
  mealsEl.querySelectorAll('[data-sum-edit-meal]').forEach(b => b.addEventListener('click', () => openMealForm(b.dataset.sumEditMeal)));

  const galleryEl = document.getElementById('summaryGallery');
  const galleryDesc = [...galleryM].sort(byDateDesc);
  galleryEl.innerHTML = galleryDesc.length ? galleryDesc.map(g => `
    <div class="list-item">
      <div class="li-main">
        <div class="li-title">${g.image ? '📷 ' + t('gallery.progressPhoto') : '📝 ' + t('gallery.note')}</div>
        <div class="li-sub">${fmtDateLong(g.date)}${g.note ? ' · ' + escapeHtml(g.note.slice(0, 60)) : ''}</div>
      </div>
      <div class="li-right"><button class="icon-btn" data-sum-view-gallery="${g.id}" title="${t('common.view')}">👁</button></div>
    </div>
  `).join('') : emptyState(t('summary.emptyGallery'));
  galleryEl.querySelectorAll('[data-sum-view-gallery]').forEach(b => b.addEventListener('click', () => openGalleryDetail(b.dataset.sumViewGallery)));

  const suppEl = document.getElementById('summarySupplements');
  const suppDesc = [...suppLogsM].sort(byDateDesc);
  suppEl.innerHTML = suppDesc.length ? suppDesc.map(l => {
    const s = supplementById(l.supplementId);
    return `
      <div class="list-item">
        <div class="li-main">
          <div class="li-title">💊 ${escapeHtml(s ? s.name : t('workouts.deletedExercise'))}</div>
          <div class="li-sub">${fmtDateLong(l.date)}${s && s.dose ? ' · ' + escapeHtml(s.dose) : ''}</div>
        </div>
      </div>
    `;
  }).join('') : emptyState(t('summary.emptySupplements'));
}

/* =========================================================
   SETTINGS — backup, storage, reset, language
   ========================================================= */
function renderSettings() {
  updateStorageUsage();
  const cur = document.getElementById('fCurrency');
  cur.value = state.settings.currency;
  cur.oninput = () => {
    state.settings.currency = cur.value.trim() || '$';
    saveState();
  };
  const langSel = document.getElementById('fLanguage');
  langSel.value = state.settings.language;
  langSel.onchange = () => {
    state.settings.language = langSel.value;
    saveState();
    fullRefresh();
  };
}

function updateStorageUsage() {
  const el = document.getElementById('storageUsage');
  if (!el) return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || '';
    const bytes = new Blob([raw]).size;
    const kb = bytes / 1024;
    const pct = Math.min(100, (bytes / (5 * 1024 * 1024)) * 100);
    const size = kb < 1024 ? kb.toFixed(0) + ' KB' : (kb / 1024).toFixed(2) + ' MB';
    el.textContent = t('settings.storageUsage', { size, pct: pct.toFixed(1) });
  } catch (e) { /* noop */ }
}

document.getElementById('btnExport').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `evolve-backup-${todayStr()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  toast(t('settings.toastBackupDownloaded'));
});

document.getElementById('btnImport').addEventListener('click', () => document.getElementById('importFile').click());
document.getElementById('importFile').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      openModal(t('settings.importTitle'), `
        <p class="hint">${t('settings.importWarning')}</p>
        <div class="modal-foot">
          <button class="btn" id="cancelImport">${t('common.cancel')}</button>
          <button class="btn danger" id="confirmImport">${t('settings.replaceData')}</button>
        </div>
      `);
      document.getElementById('cancelImport').addEventListener('click', closeModal);
      document.getElementById('confirmImport').addEventListener('click', () => {
        state = Object.assign(defaultState(), parsed);
        saveState();
        closeModal();
        applyTheme();
        fullRefresh();
        toast(t('settings.toastBackupImported'));
      });
    } catch (err) {
      toast(t('settings.toastInvalidBackup'));
    }
  };
  reader.readAsText(file);
  e.target.value = '';
});

document.getElementById('btnResetAll').addEventListener('click', () => {
  confirmAction(t('settings.eraseWarning'), () => {
    const keepLang = state.settings.language, keepCurrency = state.settings.currency, keepTheme = state.settings.theme;
    state = defaultState();
    state.settings.language = keepLang; state.settings.currency = keepCurrency; state.settings.theme = keepTheme;
    saveState();
    switchTab('dashboard');
    toast(t('settings.toastAllErased'));
  });
});

/* =========================================================
   INIT
   ========================================================= */
applyTheme();
applyStaticI18n();
renderPanel('dashboard');
updateStorageUsage();
