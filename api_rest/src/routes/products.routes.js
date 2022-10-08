import {Router} from 'express'
import { createNewSolicitud, getSolicitud, getSolicitudById, updateSolicitud} from '../controllers/products.controller'
const router = Router()

router.get('/products/solicitudes', getSolicitud)

router.post('/products/create', createNewSolicitud)

router.put('/products/update/:idsolicitud', updateSolicitud)

export default router